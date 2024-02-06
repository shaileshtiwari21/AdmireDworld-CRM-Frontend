import _ from "lodash";
import { useState } from "react";
import fakerData from "../../utils/faker";
import Button from "../../base-components/Button";
import {
  FormInput,
  FormLabel,
  FormSelect,
  FormTextarea,
} from "../../base-components/Form";
import Lucide from "../../base-components/Lucide";
import Tippy from "../../base-components/Tippy";
import TomSelect from "../../base-components/TomSelect";
import { Menu } from "../../base-components/Headless";

function AddQuery() {
  const [select, setSelect] = useState("1");

  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Update Profile</h2>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 2xl:col-span-9">
          {/* BEGIN: Personal Information */}
          <div className="mt-5 intro-y box">
            <div className="p-5">
              <div className="grid grid-cols-12 gap-x-5">
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
                  <FormInput
                    id="modal-form-1"
                    type="text"
                    placeholder="example@gmail.com"
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <FormLabel htmlFor="modal-form-1">
                    Alternate Mobile No
                  </FormLabel>
                  <FormInput
                    id="modal-form-1"
                    type="text"
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
              </div>
              <div className="flex justify-end mt-4">
                <Button
                  variant="primary"
                  type="button"
                  className="w-20 mr-auto"
                >
                  Save
                </Button>
                <a href="" className="flex items-center text-danger">
                  <Lucide icon="Trash2" className="w-4 h-4 mr-1" /> Delete
                  Account
                </a>
              </div>
            </div>
          </div>
          {/* END: Personal Information */}
        </div>
      </div>
    </>
  );
}

export default AddQuery;
