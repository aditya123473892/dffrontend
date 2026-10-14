import config from "../utils/config";

const base = "/users";

const findAll = ({ firstName, page, limit, companyId }: any) => {
   let url = base + "?";

   if (firstName) url += `firstName=${firstName}&`;

   if (companyId) url += `companyId=${companyId}&`;

   if (page) url += `page=${page}&`;

   if (limit) url += `limit=${limit}&`;

   return url.slice(0, -1);
};

const UsersApi = {
   base,
   id: (id: number) => base + `/${id}`,
   all: findAll,
   connectJotFormAPI: base + "/jotform/connect",
};

export default UsersApi;
