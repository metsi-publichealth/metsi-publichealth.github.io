(function () {
  "use strict";

  const filters = document.querySelector(".publication-filters");
  const options = document.querySelector("#publication-filter-options");
  const publications = Array.from(document.querySelectorAll(".pub-item"));

  if (!filters || !options || publications.length === 0) {
    return;
  }

  const tags = window.publicationTags || {};
  const selected = new Set();

  Object.entries(tags).forEach(([id, label]) => {
    const wrapper = document.createElement("label");
    wrapper.className = "publication-filter-option";
    wrapper.innerHTML = `<input type="checkbox" value="${id}"> <span>${label}</span>`;
    wrapper.querySelector("input").addEventListener("change", function () {
      if (this.checked) {
        selected.add(this.value);
      } else {
        selected.delete(this.value);
      }
      updateResults();
    });
    options.appendChild(wrapper);
  });

  function updateResults() {
    let visibleCount = 0;

    publications.forEach((publication) => {
      const publicationTags = new Set(
        (publication.dataset.tags || "").split(/\s+/).filter(Boolean)
      );
      const matches = selected.size === 0 ||
        [...selected].some((tag) => publicationTags.has(tag));
      publication.hidden = !matches;
      if (matches) {
        visibleCount += 1;
      }
    });

    document.querySelector("#publication-filter-count").textContent =
      `${visibleCount} publication${visibleCount === 1 ? "" : "s"} shown`;
    document.querySelector("#publication-filter-empty").hidden = visibleCount !== 0;
    document.querySelector("#publication-filter-clear").hidden = selected.size === 0;
  }

  document.querySelector("#publication-filter-clear").addEventListener("click", () => {
    selected.clear();
    options.querySelectorAll("input").forEach((input) => {
      input.checked = false;
    });
    updateResults();
  });

  updateResults();
}());
