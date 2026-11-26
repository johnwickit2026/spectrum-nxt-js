import { redirect } from "next/navigation";

export default function NonAcademicTeamRedirect() {
  redirect("/frontend/admin-team");
}
