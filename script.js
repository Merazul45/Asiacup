const playlistUrl = "https://raw.githubusercontent.com/byte-capsule/Toffee-Channels-Link-Headers/refs/heads/main/toffee_NS_Player.m3u";

// HTML Elements
const channelListElement = document.getElementById('channelList');
const spinnerElement = document.getElementById('spinner');
let channels = [];

// List of channel IDs to exclude
const excludedChannels = ["cnn", "match-1", "match-3", "match-2"];

// Show spinner
function showSpinner() {
    spinnerElement.style.display = 'block';
}

// Hide spinner
function hideSpinner() {
    spinnerElement.style.display = 'none';
}

// Load and process the playlist
async function loadPlaylist() {
    showSpinner(); // Show spinner before loading
    try {
        const response = await fetch(playlistUrl);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const data = await response.text(); // M3U is typically plain text
        const parsedChannels = parseM3U(data);

        // Process channels and filter out excluded ones
        channels = parsedChannels.filter(channel => !excludedChannels.includes(channel.id));
        displayChannels(channels);
    } catch (error) {
        console.error("Failed to load playlist:", error);
    } finally {
        hideSpinner(); // Hide spinner after loading
    }
}

// Parse M3U playlist
function parseM3U(data) {
    const lines = data.split('\n');
    const parsedChannels = [];
    
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('#EXTINF:')) {
            const info = lines[i].split(',');
            const name = info[1] || "Unknown Channel";
            const link = lines[i + 1]?.trim();

            if (link) {
                parsedChannels.push({
                    name: name,
                    logo: "https://via.placeholder.com/150", // Default logo (replace with actual logic if logos are provided)
                    id: extractIdFromLink(link),
                    link: link,
                });
            }
        }
    }

    return parsedChannels;
}

// Extract ID from the channel link
function extractIdFromLink(link) {
    return link.replace("https://bldcmprod-cdn.toffeelive.com/cdn/live/", "").replace("/playlist.m3u8", "");
}

// Display channels on the page
function displayChannels(channelData) {
    channelListElement.innerHTML = ''; // Clear current list
    channelData.forEach(channel => {
        const channelDiv = document.createElement('div');
        channelDiv.className = 'channel';
        channelDiv.innerHTML = `
            <img src="${channel.logo}" alt="${channel.name}">
            <div class="channel-name">${channel.name}</div>`;
        channelDiv.onclick = () => playChannel(channel.id);
        channelListElement.appendChild(channelDiv);
    });
}

// Filter channels based on search query
function filterChannels() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const filteredChannels = channels.filter(channel =>
        channel.name.toLowerCase().includes(searchQuery)
    );
    displayChannels(filteredChannels);
}

// Navigate to player page
function playChannel(id) {
    window.location.href = `player.html?id=${id}`;
}

// Load the playlist when the page loads
loadPlaylist();