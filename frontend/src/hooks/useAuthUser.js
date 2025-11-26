import { useQuery } from "@tanstack/react-query";
import { getAuthUser } from "../lib/api";

const useAuthUser = () => {
  const authUser = useQuery({
    queryKey: ["authUser"],
    queryFn: getAuthUser,
    retry: false, // auth checking whether user is auth or not whole block
  });

  return {
    isLoading: authUser.isLoading,
    authUser: authUser.data?.user,
  };
};

export default useAuthUser;
