import { useContext } from "react";

import { AuthContext } from "@/contexts/AuthContexts";

export const useAuth=()=> useContext(AuthContext) // criação de um novo hook com os dados ( do objeto data) 
                                                 //  criados no AuthContext