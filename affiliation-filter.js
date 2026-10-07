(function () {
  "use strict";

  const filters = Array.from(document.querySelectorAll(".team-affiliation-filter"));
  const members = Array.from(document.querySelectorAll(".team-member-card"));
  const count = document.querySelector("#team-affiliation-count");

  if (filters.length === 0 || members.length === 0 || !count) {
    return;
  }

  function updateResults(selectedAffiliation = null) {
    let visibleCount = 0;

    members.forEach((member) => {
      const affiliation = member.querySelector(".team-member-affiliation");
      const matches = selectedAffiliation === null ||
        (affiliation && affiliation.textContent.trim() === selectedAffiliation);
      member.hidden = !matches;
      if (matches) {
        visibleCount += 1;
      }
    });

    filters.forEach((filter) => {
      const isSelected = selectedAffiliation === null
        ? filter.hasAttribute("data-all")
        : filter.dataset.affiliation === selectedAffiliation;
      filter.classList.toggle("active", isSelected);
      filter.setAttribute("aria-pressed", String(isSelected));
    });

    count.textContent =
      `${visibleCount} team member${visibleCount === 1 ? "" : "s"} shown`;
  }

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      updateResults(
        filter.hasAttribute("data-all") ? null : filter.dataset.affiliation
      );
    });
  });

  updateResults();
}());
