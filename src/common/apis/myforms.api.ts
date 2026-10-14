const base = "/myforms";

const findAll = ({ page, limit }: any) => {
   let url = base + "?";

   if (page) url += `page=${page}&`;

   if (limit) url += `limit=${limit}&`;

   return url.slice(0, -1);
};

const MyformsApi = {
   base,
   id: (id: number) => base + `/${id}`,
   all: findAll,
};

export default MyformsApi;
