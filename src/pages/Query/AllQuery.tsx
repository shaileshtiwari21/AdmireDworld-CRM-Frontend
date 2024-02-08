import _ from "lodash";
import clsx from "clsx";
import { useState, useRef } from "react";
import fakerData from "../../utils/faker";
import Button from "../../base-components/Button";
import {
  FormCheck,
  FormInput,
  FormLabel,
  FormSelect,
} from "../../base-components/Form";
import Lucide from "../../base-components/Lucide";
import { Dialog, Menu } from "../../base-components/Headless";
import Table from "../../base-components/Table";
import { Preview } from "../../base-components/PreviewComponent";
import { NavLink } from "react-router-dom";

function Main() {
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  const deleteButtonRef = useRef(null);

  const [headerFooterModalPreview, setHeaderFooterModalPreview] =
    useState(false);

  const sendButtonRef = useRef(null);

  return (
    <>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap">
          <NavLink to={"/add-query"}>
            <Button variant="primary" className="mr-2 shadow-md">
              Add New Query
            </Button>
          </NavLink>
          <FormInput
            type="text"
            className="w-48 pr-10 !box ml-2"
            placeholder="Search..."
          />
          <Lucide
            icon="Search"
            className="absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3"
          />
          <div
            className=" mx-auto 
          
          
          text-slate-500"
          >
            Showing All Query
          </div>
          <div className="w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
            <div className="relative  text-slate-500">
              <Button
                variant="primary"
                className="ml-2 shadow-md"
                onClick={(event: React.MouseEvent) => {
                  event.preventDefault();
                  setHeaderFooterModalPreview(true);
                }}
              >
                Update Status
              </Button>
            </div>
          </div>
        </div>
        {/* BEGIN: Data List */}
        <div className="col-span-12 overflow-x-auto intro-y overflow-visible">
          <Table className="border-spacing-y-[10px] border-separate -mt-2">
            <Table.Thead>
              <Table.Tr>
                <Table.Th className="border-b-0 whitespace-nowrap">
                  <FormCheck.Input type="checkbox" />
                </Table.Th>
                <Table.Th className="border-b-0 whitespace-nowrap">
                  USER ID
                </Table.Th>
                <Table.Th className="border-b-0 whitespace-nowrap">
                  CLIENT NAME
                </Table.Th>
                <Table.Th className="border-b-0 whitespace-nowrap">
                  MOBILE NO
                </Table.Th>
                <Table.Th className="border-b-0 whitespace-nowrap">
                  EMAIL ID
                </Table.Th>
                <Table.Th className="border-b-0 whitespace-nowrap">
                  HOTEL CATEGORY
                </Table.Th>
                <Table.Th className="text-center border-b-0 whitespace-nowrap">
                  PAYMENT STATUS
                </Table.Th>

                <Table.Th className="text-center border-b-0 whitespace-nowrap">
                  Lead Owner
                </Table.Th>
                <Table.Th className="text-center border-b-0 whitespace-nowrap">
                  ACTIONS
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {_.take(fakerData, 9).map((faker, fakerKey) => (
                <Table.Tr key={fakerKey} className="intro-x">
                  <Table.Td className="first:rounded-l-md last:rounded-r-md w-10 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                    <FormCheck.Input type="checkbox" />
                  </Table.Td>
                  <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                    <a className="flex items-center " href="#">
                      {/* <Lucide icon="ExternalLink" className="w-4 h-4 mr-2" /> */}
                      1234567890
                    </a>
                  </Table.Td>

                  <Table.Td className="first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                    <a href="" className="font-medium whitespace-nowrap">
                      {faker.categories[0].name}
                    </a>
                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                      Tags: {faker.categories[0].tags}
                    </div>
                  </Table.Td>
                  <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                    <a className="flex items-center " href="#">
                      {/* <Lucide icon="ExternalLink" className="w-4 h-4 mr-2" /> */}
                      1234567890
                    </a>
                  </Table.Td>
                  <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                    <a className="flex items-center " href="#">
                      <Lucide icon="ExternalLink" className="w-4 h-4 mr-2" />
                      abcd@gmail.com
                    </a>
                  </Table.Td>
                  <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                    <a className="flex items-center " href="#">
                      {/* <Lucide icon="ExternalLink" className="w-4 h-4 mr-2" /> */}
                      4 star ⭐⭐⭐⭐
                    </a>
                  </Table.Td>
                  <Table.Td className="first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                    <div
                      className={clsx([
                        "flex items-center justify-center",
                        { "text-success": faker.trueFalse[0] },
                        { "text-danger": !faker.trueFalse[0] },
                      ])}
                    >
                      <Lucide icon="CheckSquare" className="w-4 h-4 mr-2" />
                      {faker.trueFalse[0] ? "Active" : "Inactive"}{" "}
                    </div>
                  </Table.Td>

                  <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                    <a className="flex items-center " href="#">
                      {/* <Lucide icon="ExternalLink" className="w-4 h-4 mr-2" /> */}
                      Shailesh
                    </a>
                  </Table.Td>
                  <Table.Td className="first:rounded-l-md last:rounded-r-md w-56 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400">
                    <div className="flex items-center justify-center">
                      <NavLink
                        className="flex items-center mr-3"
                        to="/edit-query"
                      >
                        <Lucide icon="CheckSquare" className="w-4 h-4 mr-1" />
                        Edit
                      </NavLink>
                      <a
                        className="flex items-center text-danger"
                        href="#"
                        onClick={(event) => {
                          event.preventDefault();
                          setDeleteConfirmationModal(true);
                        }}
                      >
                        <Lucide icon="Trash2" className="w-4 h-4 mr-1" /> Delete
                      </a>
                    </div>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </div>
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

      {/* END: Delete Confirmation Modal */}
      {/*payment status update model  */}
      {/* BEGIN: Modal Toggle */}
      <div className="text-center">
        <Button
          as="a"
          href="#"
          variant="primary"
          onClick={(event: React.MouseEvent) => {
            event.preventDefault();
            setHeaderFooterModalPreview(true);
          }}
        >
          Show Modal
        </Button>
      </div>
      {/* END: Modal Toggle */}
      {/* BEGIN: Modal Content */}
      <Dialog
        open={headerFooterModalPreview}
        onClose={() => {
          setHeaderFooterModalPreview(false);
        }}
        initialFocus={sendButtonRef}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">
              Update Payment Status
            </h2>
          </Dialog.Title>
          <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
            <div className="col-span-12  mt-3">
              <FormLabel htmlFor="modal-form-3">Payment Status</FormLabel>
              <FormSelect
                id="modal-form-3"
                // {...register("paymentStatus")}
              >
                <option value={""}>Select Payemnt Status</option>
                <option value={"pending"}>Pending</option>
                <option value={"completed"}>Completed</option>
                <option value={"failed"}>Failed</option>
                <option value={"refunded"}>Refunded</option>
              </FormSelect>
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <Button
              type="button"
              variant="outline-secondary"
              onClick={() => {
                setHeaderFooterModalPreview(false);
              }}
              className="w-20 mr-1"
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              type="button"
              className="w-20"
              ref={sendButtonRef}
            >
              Update
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>
      {/* END: Modal Content */}
    </>
  );
}

export default Main;
