const handleSelect = (profile) => {
  localStorage.setItem("selectedProfile", JSON.stringify(profile)); // store selected profile
  if (profile === "Recruiter") navigate("/Recruiter");
  if (profile === "Developer") navigate("/developer");
  if (profile === "Explorer") navigate("/explorer");
  if (profile === "Stalker") navigate("/stalker");
};
