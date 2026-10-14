import toast from "react-hot-toast";
import axiosInstance from "../utils/axios-instance";
import {
   IAPIResponse,
   IDeleteAPI,
   IGetAPI,
   IPatchAPI,
   IPostAPI,
} from "@/common/interfaces/main-api.interface";
import { AxiosResponse } from "axios";

const EmptyBadRequest: IAPIResponse = {
   data: null,
   error: "Bad Request",
   message: "Oops something went wrong",
   statusCode: 400,
   errorCode: "bad_request",
};

const PermissionDenied = {
   data: null,
   error: "Permission Denied",
   message: `You don't have permission to perform this action`,
   statusCode: 403,
   errorCode: "permission_denied",
};

const NotFound = {
   data: null,
   error: "Not Found",
   message: `API end point not found!`,
   statusCode: 404,
   errorCode: "not_found",
};

// common get api
export async function getApi({
   url,
   showToast = false,
   message,
   params,
}: IGetAPI): Promise<IAPIResponse> {
   try {
      const request = await axiosInstance.get(url, { params: params });
      const response = await handleAPIReturn(request, showToast, message);
      return response;
   } catch (error) {
      return await handleAPIError(error, showToast);
   }
}

// common post api
export async function postApi({
   url,
   values,
   showToast = false,
   message,
}: IPostAPI): Promise<IAPIResponse> {
   try {
      const request = await axiosInstance.post(url, values);

      const response = await handleAPIReturn(request, showToast, message);
      return response;
   } catch (error) {
      return await handleAPIError(error, showToast);
   }
}

// common delete api
export async function deleteApi({
   url,
   values,
   showToast = false,
   message,
}: IDeleteAPI): Promise<IAPIResponse> {
   try {
      const request = await axiosInstance.delete(url, { data: values });

      const response = await handleAPIReturn(request, showToast, message);
      return response;
   } catch (error) {
      return await handleAPIError(error, showToast);
   }
}

// common patch api
export async function patchApi({
   url,
   values,
   showToast = false,
   message,
}: IPatchAPI): Promise<IAPIResponse | any> {
   try {
      const request = await axiosInstance.patch(url, values);

      const response = await handleAPIReturn(request, showToast, message);
      return response;
   } catch (error) {
      return await handleAPIError(error, showToast);
   }
}

// Function to submit the formData with multiple files using Axios
export async function postFormData({
   url,
   values,
   showToast = false,
   message,
}: IPatchAPI): Promise<IAPIResponse> {
   try {
      const request = await axiosInstance.post(url, values, {
         headers: {
            "Content-Type": "multipart/form-data",
         },
      });
      const response = await handleAPIReturn(request, showToast, message);
      return response;
   } catch (error) {
      return await handleAPIError(error, showToast);
   }
}

export async function patchFormData({
   url,
   values,
   showToast = false,
   message,
}: IPatchAPI): Promise<IAPIResponse> {
   try {
      const request = await axiosInstance.patch(url, values, {
         headers: {
            "Content-Type": "multipart/form-data",
         },
      });
      const response = await handleAPIReturn(request, showToast, message);
      return response;
   } catch (error) {
      return await handleAPIError(error, showToast);
   }
}

// Handle API data to component
const handleAPIReturn = async (
   request: AxiosResponse,
   showToast: boolean,
   message: string | undefined
): Promise<IAPIResponse> => {
   try {
      const result = await request;
      const { data } = result;

      if (showToast) {
         if (data?.error || !data?.data)
            toast.error(
               message || data?.message
                  ? data?.message
                  : EmptyBadRequest.message
            );
         else
            toast.success(
               message ? message : data?.message ? data?.message : "Success"
            );
      }

      return data;
   } catch (error: any) {
      const { data } = error.response;

      console.error("log: handleAPIReturn", error);

      if (showToast) {
         toast.error(
            message || data?.message ? data?.message : EmptyBadRequest.message
         );
      }
      return data || EmptyBadRequest;
   }
};

// const handleAPIError = async (
//    error: any,
//    showToast: boolean
// ): Promise<IAPIResponse> => {
//    try {
//       if (!error?.response?.data) {
//          toast.error(EmptyBadRequest.message);
//          return EmptyBadRequest;
//       }

//       const { data } = error.response;
//       if (data.statusCode === 403) {
//          toast.error(PermissionDenied.message);
//          return PermissionDenied;
//       } else if (data.statusCode === 404) {
//          if (showToast)
//             toast.error(data.message ? data.message : NotFound.message);
//          return NotFound;
//       }

//       if (typeof error?.response.data?.message === "string") {
//          toast.error(
//             error?.response.data
//                ? error?.response.data.message
//                : EmptyBadRequest.message
//          );
//       } else if (error?.response?.data?.message.length > 0) {
//          for (const message of error?.response?.data?.message)
//             toast.error(message);
//       } else toast.error(EmptyBadRequest.message);

//       const res = error?.response?.data as IAPIResponse;

//       return res;
//    } catch (error) {}

//    return EmptyBadRequest;
// };

const handleAPIError = async (
   error: any,
   showToast: boolean
): Promise<IAPIResponse> => {
   try {
      if (!error?.response?.data) {
         return EmptyBadRequest;
      }

      const { data } = error.response;
      if (data.statusCode === 403) {
         return PermissionDenied;
      } else if (data.statusCode === 404) {
         return NotFound;
      }

      const res = error?.response?.data as IAPIResponse;

      return res;
   } catch (error) {}

   return EmptyBadRequest;
};
