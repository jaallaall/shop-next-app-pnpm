import { useMutation } from "@tanstack/react-query";
import { authenticate } from "./api";

export const useAuthenticate = () => useMutation(authenticate);
