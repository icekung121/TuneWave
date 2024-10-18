require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "MTExMDc4NzU3MzA0MDgxMjA0Mg.GWaCb8.talRIACc_RaHQ5Fp1hcqULV9oZ4bPqgv7vtAcQ",
    clientID: process.env.CLIENT_ID || "1110787573040812042", 
    prefix: process.env.PREFIX || "/", 
    ownerID: process.env.OWNER_ID || "219004158223712258",
    SpotifyID: process.env.SPOTIFY_ID || "bb4ea365589a4f329cf83de1bc4e9296",
    SpotifySecret: process.env.SPOTIFY_SECRET || "7f909e2713e44474b40a66027a527826",
    mongourl: process.env.MONGO_URL || "https://github.com/icekung121/TuneWave/",
    embedColor: process.env.EMBED_COLOR || 0xcc0000,
    logs: process.env.LOGS || "",
    errorLogsChannel: process.env.ERROR_LOGS_CHANNEL || "",
    buglogschannel: process.env.BUG_LOGS_CHANNEL || "",
    SearchPlatform: "youtube",
    AggregatedSearchOrder: process.env.AGGREGATED_SEARCH_ORDER || "youtube, youtube music, soundcloud",
    links: {
        img: process.env.IMG || '', 
        support: process.env.SUPPORT || '',
        invite: process.env.INVITE || '' 
    },
    nodes: [
        {
            host: process.env.NODE_HOST || "neko.pylex.xyz",
            port: parseInt(process.env.NODE_PORT || "10068"),
            password: process.env.NODE_PASSWORD || "youshallnotpass",
            secure: parseBoolean(process.env.NODE_SECURE || "false"),
        }
    ],
};

function parseBoolean(value) {
    if (typeof value === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
