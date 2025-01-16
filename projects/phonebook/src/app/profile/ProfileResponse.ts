import { GetDetails } from '../login/getDetails';
import { Plans } from './../plans/Plans';
export interface ProfileResponse{
  plans:Plans,
  user:GetDetails,
  familyAndFriends:GetDetails[]
}
