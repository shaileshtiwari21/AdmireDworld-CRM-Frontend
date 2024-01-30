import _, { findKey } from "lodash";
import clsx from "clsx";
import { useState, useRef, useEffect } from "react";
import fakerData from "../utils/faker";
import Button from "../base-components/Button";
import Pagination from "../base-components/Pagination";
import { FormCheck, FormInput, FormSelect } from "../base-components/Form";
import Lucide from "../base-components/Lucide";
import { Dialog, Menu } from "../base-components/Headless";
import Table from "../base-components/Table";
import axios from "axios";
import LoadingIcon from "../base-components/LoadingIcon";

function Main() {
  const [data, setData] = useState<any>(null);
  const [pgData, setPgData] = useState<any>(null);
  const [seachUser, setSearchUser] = useState("");
  const [filterDate, setFilterDate] = useState("");

  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  const deleteButtonRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const itemsPerPage = 100;

  // filter yes and no message

  const filterResofYes = data?.filter(
    (user: any) => user?.reply_message === "हाँ"
  ).length;
  const filterResofNo = data?.filter(
    (user: any) => user?.reply_message === "ना"
  ).length;
  const filterResofOther = data?.filter(
    (user: any) => user?.reply_message !== "हाँ" && user?.reply_message !== "ना"
  ).length;

  // api call
  async function fetchData() {
    try {
      let apiUrl = `https://shravankumar.in/api/messages?page=${page}`;

      if (filterDate) {
        apiUrl = `https://shravankumar.in/api/messages/bydate?page=${page}&date=${filterDate}`;
      }

      const response = await axios.get(apiUrl);

      setData(response?.data?.messages);
      setPgData(response?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }
  // download csv file
  const exelDownload = () => {
    const exelDownloads = async () => {
      try {
        const response = await axios.get(
          `https://shravankumar.in/api/download-csv`,
          {
            responseType: "blob",
          }
        );

        const blob = new Blob([response.data], {
          type: "text/csv",
        });

        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "jan-samvaad.csv");
        document.body.appendChild(link);
        link.click();

        link.remove();
      } catch (error) {
        console.error("Error downloading the file:", error);
      }
    };

    exelDownloads();
  };
  // pagination
  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < pgData?.totalPages) {
      setPage(page + 1);
    }
  };

  // search by name
  const handleChange = (event: any) => {
    const inputValue = event.target.value;
    setSearchUser(inputValue);
  };
  const filterByName = data?.filter((user: any) =>
    user?.recipientName.toLowerCase().includes(seachUser.toLowerCase())
  );

  // search by date
  const handleDateChange = (e: any) => {
    const dateValue = e.target.value;
    setFilterDate(dateValue);
    setPage(1);
  };

  useEffect(() => {
    fetchData();
  }, [page, seachUser, filterDate]);

  return (
    <>
      <h2 className="mt-10 text-lg font-medium intro-y">List of users</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="flex flex-wrap items-center col-span-12 mt-2 intro-y xl:flex-nowrap space-x-2">
          <div className="flex w-full sm:w-auto space-x-2">
            <div className="relative w-48 text-slate-500">
              <FormInput
                type="text"
                className="w-48 pr-10 !box"
                placeholder="Search..."
                onChange={handleChange}
              />
              <Lucide
                icon="Search"
                className="absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3"
              />
            </div>
            {/* date  */}
            <div className="relative w-48 text-slate-500">
              <FormInput
                type="date"
                className="w-48 pr-10 !box"
                placeholder="Date..."
                onChange={handleDateChange}
              />
            </div>
          </div>

          <div className="flex items-center w-full mt-3 xl:w-auto xl:mt-0">
            <Button
              variant="primary"
              className="mr-2 shadow-md"
              onClick={exelDownload}
            >
              <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export to Csv
            </Button>

            <Menu>
              <Menu.Button as={Button} className="px-2 !box">
                <span className="flex items-center justify-center w-5 h-5">
                  <Lucide icon="Plus" className="w-4 h-4" />
                </span>
              </Menu.Button>
              <Menu.Items className="w-52 mt-2 h-full">
                <Menu.Item>
                  <Lucide icon="MessageCircle" className=" h-4 mr-2 " />{" "}
                  <span className="font-bold text-success">
                    No of हाँ - ({filterResofYes})
                  </span>
                </Menu.Item>
                <Menu.Item>
                  <Lucide icon="MessageSquare" className=" h-4 mr-2" />
                  <span className="font-bold text-danger">
                    {" "}
                    No of ना - ({filterResofNo})
                  </span>
                </Menu.Item>
                <Menu.Item>
                  <Lucide icon="Users" className=" h-4 mr-2" />
                  <span className="font-bold text-warning">
                    {" "}
                    No of others - ({filterResofOther})
                  </span>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
        {/* BEGIN: Data List */}

        <div className="col-span-12 overflow-auto intro-y 2xl:overflow-visible">
          <Table className="border-spacing-y-[10px] border-separate -mt-2">
            <Table.Thead>
              <Table.Tr>
                <Table.Th className="border-b-0 whitespace-nowrap">
                  NO.
                </Table.Th>
                <Table.Th className="border-b-0 whitespace-nowrap">
                  NAME
                </Table.Th>
                <Table.Th className="border-b-0 whitespace-nowrap">
                  MOBILE NO.
                </Table.Th>
                <Table.Th className="text-center border-b-0 whitespace-nowrap">
                  RESPONSE
                </Table.Th>
                <Table.Th className="text-center border-b-0 whitespace-nowrap">
                  DATE
                </Table.Th>

                <Table.Th className="text-center border-b-0 whitespace-nowrap">
                  ACTIONS
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {filterByName?.length === 0 ? (
                <Table.Tr>
                  <Table.Td
                    colSpan={5}
                    className="text-center py-4 text-[25px] p-20"
                  >
                    No data found...
                  </Table.Td>
                </Table.Tr>
              ) : (
                <>
                  {filterByName?.map((item: any, index: any) => (
                    <Table.Tr key={index} className="intro-x">
                      <Table.Td className="first:rounded-l-md last:rounded-r-md  bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                        {(page - 1) * itemsPerPage + index + 1}
                      </Table.Td>
                      <Table.Td className="first:rounded-l-md last:rounded-r-md  bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                        <a href="" className="font-medium whitespace-nowrap">
                          {item?.recipientName}
                        </a>
                      </Table.Td>
                      <Table.Td className="first:rounded-l-md last:rounded-r-md  bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                        <a href="" className="font-medium whitespace-nowrap">
                          {item?.recipientPhone}
                        </a>
                      </Table.Td>
                      <Table.Td className="first:rounded-l-md last:rounded-r-md text-center  bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                        <a href="" className="font-medium">
                          {item?.reply_message}
                        </a>
                      </Table.Td>
                      <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                        <a href="" className="font-medium">
                          {new Date(item?.createdAt).toLocaleDateString()}
                        </a>
                      </Table.Td>

                      <Table.Td className="first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative">
                        <div className="flex items-center justify-center">
                          <a
                            className="flex items-center mr-5 text-primary whitespace-nowrap"
                            href="#"
                          >
                            <Lucide
                              icon="CheckSquare"
                              className="w-4 h-4 mr-1"
                            />{" "}
                            View Details
                          </a>
                         
                        </div>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </>
              )}
            </Table.Tbody>
          </Table>
        </div>
        {/* BEGIN: Pagination */}
        <div className="flex flex-wrap items-center col-span-12  sm:flex-row sm:flex-nowrap mt-4">
          {/* this is the updated code   */}
          <div className="flex flex-wrap items-center col-span-12  sm:flex-row sm:flex-nowrap mt-4">
            <Pagination className="w-full sm:w-auto sm:mr-auto">
              <Pagination.Link
                handleClick={handlePrevious}
                active={page > 1 ? true : false}
              >
                Previous
              </Pagination.Link>
              {Array.from({ length: pgData?.totalPages || 0 }).map(
                (_, index) => (
                  <Pagination.Link
                    key={index}
                    active={page === index + 1 ? true : false}
                    handleClick={() => setPage(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Link>
                )
              )}
              <Pagination.Link handleClick={handleNext} active={true}>
                Next
              </Pagination.Link>
            </Pagination>
          </div>
        </div>
        {/* END: Pagination */}
        {/* END: Data List */}
      </div>
      {/* BEGIN: Delete Confirmation Modal */}
      <Dialog
        open={deleteConfirmationModal}
        onClose={() => {
          setDeleteConfirmationModal(false);
        }}
        initialFocus={deleteButtonRef}
      >
        <Dialog.Panel>
          <div className="p-5 text-center">
            <Lucide
              icon="XCircle"
              className="w-16 h-16 mx-auto mt-3 text-danger"
            />
            <div className="mt-5 text-3xl">Are you sure?</div>
            <div className="mt-2 text-slate-500">
              Do you really want to delete these records? <br />
              This process cannot be undone.
            </div>
          </div>
          <div className="px-5 pb-8 text-center">
            <Button
              variant="outline-secondary"
              type="button"
              onClick={() => {
                setDeleteConfirmationModal(false);
              }}
              className="w-24 mr-1"
            >
              Cancel
            </Button>
            <Button
              variant="danger"
              type="button"
              className="w-24"
              ref={deleteButtonRef}
            >
              Delete
            </Button>
          </div>
        </Dialog.Panel>
      </Dialog>
      {loading && (
        <>
          <div className=" flex items-center justify-center ">
            <div className="flex flex-col items-center col-span-6 sm:col-span-3 xl:col-span-2">
              <LoadingIcon icon="bars" color="#4caf50" className="w-20 h-20" />
              <div className="mt-2 text-lg text-center font-medium">
                Loading....
              </div>
            </div>
          </div>
        </>
      )}

      {/* END: Delete Confirmation Modal */}
    </>
  );
}

export default Main;
