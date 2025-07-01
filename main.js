function showPanel(panel) {
  const panels = ['waze', 'spotify'];
  panels.forEach(p => {
    document.getElementById(`panel-${p}`).style.display = p === panel ? 'block' : 'none';
    document.getElementById(`btn-${p}`).classList.toggle("active", p === panel);
  });
}

function loadSpotify(playlistId) {
  const url = `https://open.spotify.com/embed/playlist/${playlistId}`;
  document.getElementById("spotify-frame").src = url;
}

window.addEventListener("DOMContentLoaded", () => {
  showPanel('waze');
});
