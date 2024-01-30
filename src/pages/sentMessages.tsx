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

function Main({ socket }: any) {
  const [data, setData] = useState<any>(null);
  console.log(data);

  const [pgData, setPgData] = useState<any>(null);
  const [seachUser, setSearchUser] = useState("");
  const [filterDate, setFilterDate] = useState("");

  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const itemsPerPage = 100;

  // api call
  async function fetchData() {
    try {
      let apiUrl = `https://dailypunjabpost.in/api/notifications`;

      const response = await axios.get(apiUrl);

      setData(response?.data);
      setPgData(response?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }
  // socket
  useEffect(() => {
    socket.on("connect", () => {
      // recive a msg from erver

      socket.on("welcome", (data: any) => {
        console.log("msg from server", data);
      });
      // snd msg to server
      socket.emit("msg", " thnks for conncting");
    });
    return () => {
      // "remove event listener"
      socket.off("connct");
    };
  }, [socket]);
  useEffect(() => {
    fetchData();
  }, [page, seachUser, filterDate]);

  return (
    <>
      <h2 className="mt-10 text-lg font-medium intro-y">Status</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="flex flex-wrap items-center col-span-12 mt-2 intro-y xl:flex-nowrap space-x-2">
          <div className="flex w-full sm:w-auto space-x-2">{/* date  */}</div>
        </div>
        {/* BEGIN: Data List */}

        <div className="col-span-12 overflow-auto intro-y 2xl:overflow-visible">
          <Table className="border-spacing-y-[10px] border-separate -mt-2">
            <Table.Thead>
              <Table.Tr>
                <Table.Th className="text-centerborder-b-0 whitespace-nowrap">
                  
                  NO.
                </Table.Th>

                <Table.Th className="text-center border-b-0 whitespace-nowrap">
                  MOBILE NO.
                </Table.Th>

                <Table.Th className="border-b-0 whitespace-nowrap text-center">
                  MESSAGE STATUS
                </Table.Th>
                <Table.Th className="border-b-0 whitespace-nowrap text-center">
                  DATE
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {data?.length === 0 ? (
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
                  {data?.map((item: any, index: any) => (
                    <Table.Tr key={index} className="intro-x">
                      <Table.Td className="first:rounded-l-md last:rounded-r-md  bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                        {(page - 1) * itemsPerPage + index + 1}
                      </Table.Td>

                      <Table.Td className="text-center first:rounded-l-md last:rounded-r-md  bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                        <a href="" className="font-medium whitespace-nowrap">
                          {item?._id}
                        </a>
                      </Table.Td>
                      <Table.Td className="text-center first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative">
                        {item?.notifications.map(
                          (notification: any, notificationIndex: any) => {
                            const isRead = notification?.statuses
                              ?.map((i: { status: any }) => i?.status)
                              .includes("read");
                            const isSent = notification?.statuses
                              ?.map((i: { status: any }) => i?.status)
                              .includes("sent");
                            const isDelivered = notification?.statuses
                              ?.map((i: { status: any }) => i?.status)
                              .includes("delivered");

                            return (
                              <a
                                key={notificationIndex}
                                href=""
                                className=" font-medium  whitespace-nowrap text-black flex flex-col justify-center items-center py-8"
                              >
                                {isRead ? (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="w-6 h-6 mr-2 
                                  text-[#0A685F]"
                                  >
                                    <path d="M18 6 7 17l-5-5" />
                                    <path d="m22 10-7.5 7.5L13 16" />
                                  </svg>
                                ) : isDelivered ? (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className={`w-6 h-6 mr-2 ${"text-gray-400"} `}
                                  >
                                    <path d="M18 6 7 17l-5-5" />
                                    <path d="m22 10-7.5 7.5L13 16" />
                                  </svg>
                                ) : isSent ? (
                                  <Lucide
                                    icon={"Check"}
                                    className="w-6 h-6 mr-2 text-gray-400"
                                  />
                                ) : (
                                  <span className="text-red-500">Failed</span>
                                )}
                              </a>
                            );
                          }
                        )}
                      </Table.Td>
                      {/* date  */}
                      <Table.Td className="text-center first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative">
                        {item?.notifications?.map(
                          (notification: any, notificationIndex: any) => {
                            const isRead = notification?.statuses
                              ?.map((i: { status: any }) => i?.status)
                              .includes("read");

                            const isSent = notification?.statuses
                              ?.map((i: { status: any }) => i?.status)
                              .includes("sent");
                            const isDelivered = notification?.statuses
                              ?.map((i: { status: any }) => i?.status)
                              .includes("delivered");

                            const isRead1 = notification?.statuses
                              ?.map((i: { status: any }) => i?.status)
                              .indexOf("read");
                            const isSent1 = notification?.statuses
                              ?.map((i: { status: any }) => i?.status)
                              .indexOf("sent");
                            const isDelivered1 = notification?.statuses
                              ?.map((i: { status: any }) => i?.status)
                              .indexOf("delivered");

                            return (
                              <a
                                key={notificationIndex}
                                href=""
                                className=" font-medium  whitespace-nowrap text-black flex flex-col justify-center items-center py-8 "
                              >
                                {isRead ? (
                                  <>
                                    {notification?.statuses[isRead1]?.timestamp}
                                  </>
                                ) : isDelivered ? (
                                  <>
                                    {
                                      notification?.statuses[isDelivered1]
                                        ?.timestamp
                                    }
                                  </>
                                ) : isSent ? (
                                  <>
                                    {notification?.statuses[isSent1]?.timestamp}
                                  </>
                                ) : (
                                  <></>
                                )}
                              </a>
                            );
                          }
                        )}
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </>
              )}
            </Table.Tbody>
          </Table>
        </div>
        {/* BEGIN: Pagination */}

        {/* END: Pagination */}
        {/* END: Data List */}
      </div>

      {loading && (
        <>
          <div className=" flex items-center justify-center">
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
