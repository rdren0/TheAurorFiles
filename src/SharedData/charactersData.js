import { getNPCImageUrl } from "../utils/npcImageUtils";

const createNPC = ({ id, name, type, case_name = null }) => ({
  id,
  name,
  type,
  case_name,
  src: getNPCImageUrl(name),
});

export const ALL_CHARACTERS = [
  createNPC({
    id: 1,
    name: "Ted Lasso",
    type: "Informant",
    case_name: "The Missing Trophy",
  }),
  createNPC({
    id: 2,
    name: "Aurelia Kern",
    type: "Reporter",
    case_name: "Mysterious Disappearances",
  }),
  createNPC({
    id: 3,
    name: "Gertrude Otto",
    type: "Suspect",
    case_name: "Gringotts Robbery",
  }),
];
