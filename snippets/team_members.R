team <- fs::dir_ls("_data/team", regexp = "\\w+\\-\\w+\\.yml") |>
  purrr::map(yaml::read_yaml)

# Put Seb first (group leader)
#team <- c(
#  team[which(purrr::map(team, "name") == "Sebastian Funk")],
#  team[-which(purrr::map(team, "name") == "Sebastian Funk")]
#)

icon_link <- function(url, icon, label = NULL) {
  if (is.null(url) || !nzchar(url)) return("")
  sprintf(
    '<a href="%s"><i class="%s"></i>%s</a>',
    url, icon, ifelse(is.null(label), "", paste0(" ", label))
  )
}

## keep current team members
current_team <- team |>
  purrr::keep(\(x) {
    any(purrr::map_lgl(x$position, \(y) {
      is.null(y$end) || y$end > Sys.Date()
    }))
  })

# Keep Kerrigan and Mukhlid at the top, then list everyone else alphabetically.
current_team_names <- purrr::map_chr(current_team, "name")
priority_names <- c("Kerrigan McCarthy", "Mukhlid Yousif")
remaining_names <- sort(setdiff(current_team_names, priority_names))
current_team <- current_team[match(c(priority_names, remaining_names), current_team_names)]
