function initViz() {
    var containerDiv = document.getElementById("tableauvisual"),
    url = "https://public.tableau.com/shared/R895SD582?:display_count=yes&:origin=viz_share_link";

    var viz = new tableau.Viz(containerDiv, url);
}