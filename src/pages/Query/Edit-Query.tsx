import _ from "lodash";
import Button from "../../base-components/Button";
import {
  FormInput,
  FormLabel,
  FormSelect,
  FormTextarea,
} from "../../base-components/Form";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnyAction } from "@reduxjs/toolkit";
function EditQuery() {
  // yup form validation
  // const schema = yup.object({
  //   email: yup.string().email().required(),
  //   password: yup.string().min(8).max(32).required(),
  // });
  const { register, handleSubmit } = useForm<any>({
    // resolver: yupResolver(schema),
  });
  const onSubmitHandler = async (data: any) => {
    console.log(data);
    try {
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Edit Client Details</h2>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 2xl:col-span-12">
          {/* BEGIN: Personal Information */}
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="mt-5 intro-y box">
              <div className="p-5">
                <div className="grid grid-cols-12 gap-x-5">
                  <div className="col-span-12 sm:col-span-3">
                    <FormLabel htmlFor="modal-form-1">Name</FormLabel>
                    <FormInput
                      id="modal-form-1"
                      type="text"
                      placeholder="Enter Name"
                      {...register("userName")}
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-3">
                    <FormLabel htmlFor="modal-form-1">Email</FormLabel>
                    <FormInput
                      id="modal-form-1"
                      type="text"
                      placeholder="Enter Email"
                      {...register("email")}
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-3 ">
                    <FormLabel htmlFor="modal-form-1">
                      Alternate Email
                    </FormLabel>
                    <FormInput
                      id="modal-form-1"
                      type="text"
                      placeholder="Enter Alternate Email"
                      {...register("alternateEmail")}
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-3 ">
                    <FormLabel htmlFor="modal-form-1">Mobile No</FormLabel>
                    <FormInput
                      id="modal-form-1"
                      type="number"
                      placeholder="Enter Mobile Number"
                      {...register("mobileNo")}
                    />
                  </div>

                  <div className="col-span-12 sm:col-span-3 mt-3 ">
                    <FormLabel htmlFor="modal-form-1">
                      Alternate Mobile No
                    </FormLabel>
                    <FormInput
                      id="modal-form-1"
                      type="number"
                      placeholder="Enter Alternate Mobile No"
                      {...register("alternateMobileNo")}
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-3 mt-3">
                    <FormLabel htmlFor="modal-form-2">Destination</FormLabel>
                    <FormInput
                      id="modal-form-2"
                      type="text"
                      placeholder="Enter Destination"
                      {...register("destination")}
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-3 mt-3">
                    <FormLabel htmlFor="modal-form-3">City</FormLabel>
                    <FormInput
                      id="modal-form-3"
                      type="text"
                      placeholder="Enter City"
                      {...register("city")}
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-3 mt-3">
                    <FormLabel htmlFor="modal-form-4"> Travel Date</FormLabel>
                    <FormInput type="date" {...register("travelDate")} />
                  </div>
                  <div className="col-span-12 sm:col-span-3 mt-3">
                    <FormLabel htmlFor="modal-form-5">No Of Days</FormLabel>
                    <FormInput
                      id="modal-form-5"
                      type="text"
                      placeholder="Enter Number Of Days"
                      {...register("noOfDays")}
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-3 mt-3">
                    <FormLabel htmlFor="modal-form-5">No Of Adults</FormLabel>
                    <FormInput
                      id="modal-form-5"
                      type="text"
                      placeholder="Enter No Of Adults"
                      {...register("noOfAdults")}
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-3 mt-3">
                    <FormLabel htmlFor="modal-form-5">No Of Children</FormLabel>
                    <FormInput
                      id="modal-form-5"
                      type="text"
                      placeholder="Enter No Of Children"
                      {...register("noOfChildren")}
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-3 mt-3">
                    <FormLabel htmlFor="modal-form-5">No Of Infants</FormLabel>
                    <FormInput
                      id="modal-form-5"
                      type="text"
                      placeholder="Enter No Of Infants"
                      {...register("noOfInfants")}
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-3 mt-3">
                    <FormLabel htmlFor="modal-form-5">Budget</FormLabel>
                    <FormInput
                      id="modal-form-5"
                      type="text"
                      placeholder="Enter Budget"
                      {...register("budget")}
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-3 mt-3">
                    <FormLabel htmlFor="modal-form-5">
                      Hotel Categorys
                    </FormLabel>
                    <FormSelect
                      id="modal-form-3"
                      {...register("hotelCategory")}
                    >
                      <option value={""}>Select Category</option>
                      <option>1 Star ⭐</option>

                      <option>2 Star ⭐⭐</option>
                      <option>3 Star ⭐⭐⭐</option>
                      <option>4 Star ⭐⭐⭐⭐</option>
                      <option>5 Star ⭐⭐⭐⭐</option>
                    </FormSelect>
                  </div>

                  <div className="col-span-12 sm:col-span-3 mt-3">
                    <FormLabel htmlFor="modal-form-3">Lead Sourse</FormLabel>
                    <FormSelect id="modal-form-3" {...register("leadSourse")}>
                      <option value={""}>Select Lead Type</option>
                      <option>Facebook</option>
                      <option>Instagram</option>
                      <option>Other</option>
                    </FormSelect>
                  </div>
                  <div className="col-span-12 sm:col-span-3 mt-3">
                    <FormLabel htmlFor="modal-form-3">Payment Status</FormLabel>
                    <FormSelect
                      id="modal-form-3"
                      {...register("paymentStatus")}
                    >
                      <option value={""}>Select Payemnt Status</option>
                      <option value={"pending"}>Pending</option>
                      <option value={"completed"}>Completed</option>
                      <option value={"failed"}>Failed</option>
                      <option value={"refunded"}>Refunded</option>
                    </FormSelect>
                  </div>
                  <div className="col-span-12 sm:col-span-12 mt-3">
                    <FormLabel htmlFor="modal-form-5">Comment</FormLabel>
                    <FormTextarea
                      rows={4}
                      cols={20}
                      id="modal-form-5"
                      placeholder="Give A commnet"
                      {...register("comment")}
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center mt-4">
                  <Button variant="primary" className="w-40 ">
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </form>
          {/* END: Personal Information */}
        </div>
      </div>
    </>
  );
}

export default EditQuery;
