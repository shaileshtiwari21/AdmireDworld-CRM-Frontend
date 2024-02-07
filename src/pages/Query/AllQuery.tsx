import _ from "lodash";
import clsx from "clsx";
import { useState, useRef } from "react";
import fakerData from "../../utils/faker";
import Button from "../../base-components/Button";
import { FormInput, FormLabel, FormSelect } from "../../base-components/Form";
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
      <div className="col-span-12 lg:col-span-6 ">
        {/* BEGIN: Header & Footer Modal */}
        <Preview>
          <Dialog
            size="xl"
            open={headerFooterModalPreview}
            onClose={() => {
              setHeaderFooterModalPreview(false);
            }}
            initialFocus={sendButtonRef}
          >
            <Dialog.Panel>
              <Dialog.Title>
                <h2 className="mr-auto text-base font-medium">Add Query</h2>
              </Dialog.Title>
              <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                <div className="col-span-12 sm:col-span-6">
                  <FormLabel htmlFor="modal-form-1">Name</FormLabel>
                  <FormInput
                    id="modal-form-1"
                    type="text"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <FormLabel htmlFor="modal-form-1">Email</FormLabel>
                  <FormInput
                    id="modal-form-1"
                    type="text"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <FormLabel htmlFor="modal-form-1">Alternate Email</FormLabel>
                  <FormInput
                    id="modal-form-1"
                    type="text"
                    placeholder="example@gmail.com"
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <FormLabel htmlFor="modal-form-1">Mobile No</FormLabel>
                  <FormInput type="phone" placeholder="example@gmail.com" />
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <FormLabel htmlFor="modal-form-1">
                    Alternate Mobile No
                  </FormLabel>
                  <FormInput
                    id="modal-form-1"
                    type="phone"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <FormLabel htmlFor="modal-form-2">Destination</FormLabel>
                  <FormInput
                    id="modal-form-2"
                    type="text"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <FormLabel htmlFor="modal-form-3">City</FormLabel>
                  <FormInput
                    id="modal-form-3"
                    type="text"
                    placeholder="Important Meeting"
                  />
                </div>
                <div className="col-span-12 sm:col-span-6">
                  Travel Date
                  <FormLabel htmlFor="modal-form-4"></FormLabel>
                  <FormInput
                    id="modal-form-4"
                    type="text"
                    placeholder="Job, Work, Documentation"
                  />
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <FormLabel htmlFor="modal-form-5">No Of Days</FormLabel>
                  <FormInput
                    id="modal-form-5"
                    type="text"
                    placeholder="Job, Work, Documentation"
                  />
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <FormLabel htmlFor="modal-form-5">No Of Adults</FormLabel>
                  <FormInput
                    id="modal-form-5"
                    type="text"
                    placeholder="Job, Work, Documentation"
                  />
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <FormLabel htmlFor="modal-form-5">No Of Children</FormLabel>
                  <FormInput
                    id="modal-form-5"
                    type="text"
                    placeholder="Job, Work, Documentation"
                  />
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <FormLabel htmlFor="modal-form-5">No Of Infants</FormLabel>
                  <FormInput
                    id="modal-form-5"
                    type="text"
                    placeholder="Job, Work, Documentation"
                  />
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <FormLabel htmlFor="modal-form-5">Budget</FormLabel>
                  <FormInput
                    id="modal-form-5"
                    type="text"
                    placeholder="Job, Work, Documentation"
                  />
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <FormLabel htmlFor="modal-form-5">Hotel Categorys</FormLabel>
                  <FormSelect id="modal-form-6">
                    <option>10</option>
                    {/* <option>25</option> */}
                    <option>35</option>
                    <option>50</option>
                  </FormSelect>
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <FormLabel htmlFor="modal-form-6">Lead Type</FormLabel>
                  <FormSelect id="modal-form-6">
                    <option>10</option>
                    <option>25</option>
                    <option>35</option>
                    <option>50</option>
                  </FormSelect>
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <FormLabel htmlFor="modal-form-6">Lead Sourse</FormLabel>
                  <FormSelect id="modal-form-6">
                    <option>10</option>
                    <option>25</option>
                    <option>35</option>
                    <option>50</option>
                  </FormSelect>
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <FormLabel htmlFor="modal-form-6">Payment Status</FormLabel>
                  <FormSelect id="modal-form-6">
                    <option>10</option>
                    <option>25</option>
                    <option>35</option>
                    <option>50</option>
                  </FormSelect>
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <FormLabel htmlFor="modal-form-5">Comment</FormLabel>
                  <FormInput
                    id="modal-form-5"
                    type="text"
                    placeholder="Job, Work, Documentation"
                  />
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
                  Send
                </Button>
              </Dialog.Footer>
            </Dialog.Panel>
          </Dialog>
          {/* END: Modal Content */}
        </Preview>
        {/* END: Header & Footer Modal */}
      </div>
      <h2 className="mt-10 text-lg font-medium intro-y">Categories</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap">
          <NavLink to={"/add-query"}>
            <Button variant="primary" className="mr-2 shadow-md">
              Add New Query
            </Button>
          </NavLink>
          <Menu>
            <Menu.Button as={Button} className="px-2 !box">
              <span className="flex items-center justify-center w-5 h-5">
                <Lucide icon="Plus" className="w-4 h-4" />
              </span>
            </Menu.Button>
            <Menu.Items className="w-40">
              <Menu.Item>
                <Lucide icon="Printer" className="w-4 h-4 mr-2" /> Print
              </Menu.Item>
              <Menu.Item>
                <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export to
                Excel
              </Menu.Item>
              <Menu.Item>
                <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export to
                PDF
              </Menu.Item>
            </Menu.Items>
          </Menu>
          <div className="hidden mx-auto md:block text-slate-500">
            Showing 1 to 10 of 150 entries
          </div>
          <div className="w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
            <div className="relative w-56 text-slate-500">
              <FormInput
                type="text"
                className="w-56 pr-10 !box"
                placeholder="Search..."
              />
              <Lucide
                icon="Search"
                className="absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3"
              />
            </div>
          </div>
        </div>
        {/* BEGIN: Data List */}
        <div className="col-span-12 overflow-auto intro-y lg:overflow-visible">
          <Table className="border-spacing-y-[10px] border-separate -mt-2">
            <Table.Thead>
              <Table.Tr>
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
                <Table.Th className="text-center border-b-0 whitespace-nowrap">
                  PAYMENT STATUS
                </Table.Th>
                <Table.Th className="text-center border-b-0 whitespace-nowrap">
                  ACTIONS
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {_.take(fakerData, 9).map((faker, fakerKey) => (
                <Table.Tr key={fakerKey} className="intro-x">
                  <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                    <a className="flex items-center mr-3 " href="#">
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
                    <a className="flex items-center mr-3 " href="#">
                      {/* <Lucide icon="ExternalLink" className="w-4 h-4 mr-2" /> */}
                      1234567890
                    </a>
                  </Table.Td>
                  <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                    <a className="flex items-center mr-3 " href="#">
                      <Lucide icon="ExternalLink" className="w-4 h-4 mr-2" />
                      abcd@gmail.com
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
                  <Table.Td className="first:rounded-l-md last:rounded-r-md w-56 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400">
                    <div className="flex items-center justify-center">
                      <a className="flex items-center mr-3" href="">
                        <Lucide icon="CheckSquare" className="w-4 h-4 mr-1" />
                        Edit
                      </a>
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
    </>
  );
}

export default Main;
