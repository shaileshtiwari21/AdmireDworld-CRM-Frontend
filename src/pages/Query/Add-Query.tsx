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
function AddQuery() {
  // yup form validation
  const schema = yup.object({
    email: yup.string().email().required(),
    userName: yup.string().required(),

    mobileNo: yup
      .string()
      .matches(/^[0-9]{10}$/, "Invalid mobile number")
      .required(),

    destination: yup.string().required(),
    city: yup.string().required(),
    travelDate: yup.string().required(),
    noOfDays: yup.string().required(),
    noOfAdults: yup.string().required(),
    noOfChildren: yup.string().required(),
    noOfInfants: yup.string().required(),
    budget: yup.string().required(),
    hotelCategory: yup.string().required(),
    leadSourse: yup.string().required(),
    paymentStatus: yup.string().required(),
    comment: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
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
        <h2 className="mr-auto text-lg font-medium">Add Client Details</h2>
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
                    {errors.email && (
                      <p className="mt-2 text-danger ">
                        {errors.email.message}
                      </p>
                    )}
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
                    {errors.mobileNo && (
                      <p className="mt-2 text-danger ">
                        {errors.mobileNo.message}
                      </p>
                    )}
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
                    {errors.destination && (
                      <p className="mt-2 text-danger ">
                        {errors.destination.message}
                      </p>
                    )}
                  </div>
                  <div className="col-span-12 sm:col-span-3 mt-3">
                    <FormLabel htmlFor="modal-form-3">City</FormLabel>
                    <FormInput
                      id="modal-form-3"
                      type="text"
                      placeholder="Enter City"
                      {...register("city")}
                    />
                    {errors.city && (
                      <p className="mt-2 text-danger ">{errors.city.message}</p>
                    )}
                  </div>
                  <div className="col-span-12 sm:col-span-3 mt-3">
                    <FormLabel htmlFor="modal-form-4"> Travel Date</FormLabel>
                    <FormInput type="date" {...register("travelDate")} />
                    {errors.travelDate && (
                      <p className="mt-2 text-danger ">
                        {errors.travelDate.message}
                      </p>
                    )}
                  </div>
                  <div className="col-span-12 sm:col-span-3 mt-3">
                    <FormLabel htmlFor="modal-form-5">No Of Days</FormLabel>
                    <FormInput
                      id="modal-form-5"
                      type="text"
                      placeholder="Enter Number Of Days"
                      {...register("noOfDays")}
                    />
                    {errors.noOfDays && (
                      <p className="mt-2 text-danger ">
                        {errors.noOfDays.message}
                      </p>
                    )}
                  </div>
                  <div className="col-span-12 sm:col-span-3 mt-3">
                    <FormLabel htmlFor="modal-form-5">No Of Adults</FormLabel>
                    <FormInput
                      id="modal-form-5"
                      type="text"
                      placeholder="Enter No Of Adults"
                      {...register("noOfAdults")}
                    />
                    {errors.noOfAdults && (
                      <p className="mt-2 text-danger ">
                        {errors.noOfAdults.message}
                      </p>
                    )}
                  </div>
                  <div className="col-span-12 sm:col-span-3 mt-3">
                    <FormLabel htmlFor="modal-form-5">No Of Children</FormLabel>
                    <FormInput
                      id="modal-form-5"
                      type="text"
                      placeholder="Enter No Of Children"
                      {...register("noOfChildren")}
                    />
                    {errors.noOfChildren && (
                      <p className="mt-2 text-danger ">
                        {errors.noOfChildren.message}
                      </p>
                    )}
                  </div>
                  <div className="col-span-12 sm:col-span-3 mt-3">
                    <FormLabel htmlFor="modal-form-5">No Of Infants</FormLabel>
                    <FormInput
                      id="modal-form-5"
                      type="text"
                      placeholder="Enter No Of Infants"
                      {...register("noOfInfants")}
                    />
                    {errors.noOfInfants && (
                      <p className="mt-2 text-danger ">
                        {errors.noOfInfants.message}
                      </p>
                    )}
                  </div>
                  <div className="col-span-12 sm:col-span-3 mt-3">
                    <FormLabel htmlFor="modal-form-5">Budget</FormLabel>
                    <FormInput
                      id="modal-form-5"
                      type="text"
                      placeholder="Enter Budget"
                      {...register("budget")}
                    />
                    {errors.budget && (
                      <p className="mt-2 text-danger ">
                        {errors.budget.message}
                      </p>
                    )}
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
                    {errors.hotelCategory && (
                      <p className="mt-2 text-danger ">
                        {errors.hotelCategory.message}
                      </p>
                    )}
                  </div>

                  <div className="col-span-12 sm:col-span-3 mt-3">
                    <FormLabel htmlFor="modal-form-3">Lead Sourse</FormLabel>
                    <FormSelect id="modal-form-3" {...register("leadSourse")}>
                      <option value={""}>Select Lead Type</option>
                      <option>Facebook</option>
                      <option>Instagram</option>
                      <option>Other</option>
                    </FormSelect>
                    {errors.leadSourse && (
                      <p className="mt-2 text-danger ">
                        {errors.leadSourse.message}
                      </p>
                    )}
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
                    {errors.paymentStatus && (
                      <p className="mt-2 text-danger ">
                        {errors.paymentStatus.message}
                      </p>
                    )}
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
                    {errors.comment && (
                      <p className="mt-2 text-danger ">
                        {errors.comment.message}
                      </p>
                    )}
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

export default AddQuery;
