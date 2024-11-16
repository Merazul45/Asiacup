const playlistUrl = "https://raw.githubusercontent.com/byte-capsule/Toffee-Channels-Link-Headers/refs/heads/main/toffee_NS_Player.m3u";
        const channelListElement = document.getElementById('channelList');
        const spinnerElement = document.getElementById('spinner');
        let channels = [];

        // List of channel IDs to exclude
        const excludedChannels = ["cnn", "match-1","match-3", "match-2"];

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
                const data = await response.json();

                // Process channels and filter out excluded ones
                channels = data.map(channel => {
                    const id = extractIdFromLink(channel.link);
                    return {
                        name: channel.name,
                        logo: channel.logo,
                        id: id
                    };
                }).filter(channel => !excludedChannels.includes(channel.id)); // Exclude channels

                displayChannels(channels);
            } catch (error) {
                console.error("Failed to load playlist:", error);
            } finally {
                hideSpinner(); // Hide spinner after loading
            }
        }

        // Extract ID from the channel link
        function extractIdFromLink(link) {
            return link.replace("https://bldcmprod-cdn.toffeelive.com/cdn/live/", "").replace("/playlist.m3u8", "");
        }

        // Display channels on the page
        function displayChannels(channelData) {
            channelListElement.innerHTML = '';
            channelData.forEach(channel => {
                const channelDiv = document.createElement('div');
                channelDiv.className = 'channel';
                channelDiv.innerHTML = `
                    <img src="${channel.logo}" alt="${channel.name}">
                    <div class="channel-name">${channel.name}</div>
                `;
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
