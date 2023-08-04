import axios from "axios";
import { BASIC_API_ROUTE } from "../utils/apiConstants";

const extractData = (res) => res.data.data;

export const getAllMembersAPIEffect = async () => {
  const allMembers = await axios
    .get(`${BASIC_API_ROUTE}list`)
    .then(extractData);
  return allMembers;
};

export const addMemberAPIEffect = async (member) => {
  const addedMember = await axios
    .post(`${BASIC_API_ROUTE}create`, member)
    .then(extractData);
  return addedMember;
};

export const updateMemberAPIEffect = async (member) => {
  const updatedMember = await axios
    .put(`${BASIC_API_ROUTE}${member.id}`, member)
    .then(extractData);
  return updatedMember;
};

export const deleteMemberAPIEffect = async (memberId) => {
  const updatedMember = await axios
    .delete(`${BASIC_API_ROUTE}${memberId}`)
    .then(extractData);
  return updatedMember;
};
