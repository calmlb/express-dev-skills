let albumsArray = [
    {id: "a0", name: "Time, Love, & Tenderness", artist: "Michael Bolton"},
    {id: "a1", name: "Nevermind", artist: "Nirvana"},
    {id: "a2", name: "Selected Ambient Works Vol. 1", artist: "Aphex Twin"},
    {id: "a3", name: "Come To Daddy", artist: "Richard D. James"},
]

    function getName(incoming_id) {
        for (let current_album of albumsArray) {
            if (current_album.id == incoming_id) {
                return current_album.name, current_album.artist
            }
        }
    }

  module.exports = {
      albumsArray,
      getName,
  }