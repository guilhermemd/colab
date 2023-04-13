import { format } from "date-fns";

export function useCardUsersDetails() {
  const formattedDate = (date: string) => {
    return format(new Date(date), "dd/MM/yyyy");
  };
  return {
    formattedDate,
  };
}
