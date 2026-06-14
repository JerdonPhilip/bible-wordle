// src/data/bibleWords.js
// Comprehensive Bible Word Database
// All words are exactly 5, 6, or 7 letters long.
// Categories: people, places, events, concepts, animals, things

export const BIBLE_WORDS = {
    // ==================== 5-LETTER WORDS ====================
    5: {
        people: [
            { word: "aaron", hint: "Brother of Moses, first high priest" },
            { word: "abner", hint: "Commander of Saul's army, killed by Joab" },
            { word: "abram", hint: "Original name of Abraham before God changed it" },
            { word: "achan", hint: "An Israelite who disobeyed God at the battle of Jericho." },
            { word: "achan", hint: "An Israelite who disobeyed God at the battle of Jericho." },
            { word: "asher", hint: "Son of Jacob, founder of one of the 12 tribes" },
            { word: "bilhah", hint: "Handmaid of Rachel, mother of Dan and Naphtali" },
            { word: "david", hint: "Shepherd boy who became king, defeated Goliath" },
            { word: "elihu", hint: "Friend of Job, who spoke about God's justice" },
            { word: "enoch", hint: "Walked with God, taken up to heaven" },
            { word: "gomer", hint: "Wife of Hosea, symbol of Israel's unfaithfulness" },
            { word: "hagar", hint: "Egyptian servant of Sarah, mother of Ishmael" },
            { word: "haman", hint: "Opponent of Esther, hanged on gallows" },
            { word: "isaac", hint: "Son of Abraham, almost sacrificed by his father" },
            { word: "jacob", hint: "Father of 12 tribes of Israel" },
            { word: "james", hint: "Son of Zebedee, brother of John, apostle" },
            { word: "jesus", hint: "Son of God, Savior of the world" },
            { word: "judah", hint: "Son of Jacob, tribe of kings, including David and Jesus" },
            { word: "judas", hint: "Betrayed Jesus with a kiss" },
            { word: "laban", hint: "Father of Rachel and Leah, Jacob's father-in-law" },
            { word: "moses", hint: "Led Israelites out of Egypt, received Ten Commandments" },
            { word: "moses", hint: "Led Israelites out of Egypt, received Ten Commandments" },
            { word: "nahum", hint: "Prophet who ministered in Nineveh" },
            { word: "naomi", hint: "Ruth’s mother-in-law who returned with her to Bethlehem." },
            { word: "orpah", hint: "Ruth’s sister-in-law who stayed in Moab." },
            { word: "peter", hint: "Disciple who denied Jesus three times" },
            { word: "rahab", hint: "Prostitute of Jericho, saved by Joshua" },
            { word: "sarah", hint: "Wife of Abraham, mother of Isaac" },
            { word: "silas", hint: "Apostle and companion of Paul" },
            { word: "simon", hint: "Original name of Peter, also a zealot" },
            { word: "tamar", hint: "Daughter-in-law of Judah, mother of Perez and Zerah" },
            { word: "titus", hint: "Companion of Paul, recipient of an epistle" }
        ],
        places: [
            { word: "bethel", hint: "A significant historical and religious site where Jacob had his vision of a stairway reaching to heaven." },
            { word: "cairo", hint: "Modern capital of Egypt, near biblical Memphis" },
            { word: "caper", hint: "Capernaum, Jesus' ministry base" },
            { word: "egypt", hint: "Land where Israelites were slaves" },
            { word: "etham", hint: "Place on the edge of the wilderness" },
            { word: "haran", hint: "City where Abraham lived before going to Canaan" },
            { word: "horeb", hint: "Another name for Mount Sinai, where Moses received the Ten Commandments" },
            { word: "joppa", hint: "ancient port city where Jonah boarded a ship to flee from God, and where Peter later raised Tabitha from the dead." },
            { word: "judea", hint: "Roman province, home of Jesus" },
            { word: "marah", hint: "Bitter waters turned sweet by Moses" },
            { word: "rephe", hint: "Rephidim, where Moses struck rock for water" },
            { word: "sinai", hint: "Mountain where Moses received the Law" },
            { word: "sodom", hint: "City of the plain, destroyed for its sin" },
            { word: "thebe", hint: "Ancient Egyptian city, Thebes" }
        ],
        animals: [
            { word: "camel", hint: "Ship of the desert, eye of needle" },
            { word: "cobra", hint: "Venomous snake, symbol of evil" },
            { word: "eagle", hint: "Renews its strength, symbol of God's care" },
            { word: "heron", hint: "Water bird, considered unclean" },
            { word: "horse", hint: "War animal, not trusted by Psalmist" },
            { word: "hyena", hint: "A land scavenger referenced in various Old Testament passages" },
            { word: "quail", hint: "Small bird, provided as food in the wilderness" },
            { word: "raven", hint: "First bird sent out by Noah" },
            { word: "sheep", hint: "Deeply tied to the themes of sacrificial offerings" },
            { word: "snail", hint: "Mentioned in Psalms as melting away" },
            { word: "snake", hint: "Creature in the Garden of Eden" },
            { word: "stork", hint: "Unclean migratory bird, known for caring for young" },
            { word: "swine", hint: "Unclean land animal, forbidden for consumption" },
            { word: "viper", hint: "Poisonous snake, brood of vipers" }
        ],
        things: [
            { word: "altar", hint: "Place of sacrifice, built by Noah, Abraham, etc." },
            { word: "staff", hint: "Rod of Moses, turned into serpent" },
            { word: "crown", hint: "Thorny one placed on Jesus' head" },
            { word: "manna", hint: "Bread from heaven in the wilderness" },
            { word: "quail", hint: "Meat given to Israelites in desert" },
            { word: "tunic", hint: "Seamless garment of Jesus, gambled by soldiers" },
            { word: "cloak", hint: "Outer garment, used as pledge" },
            { word: "flask", hint: "Jar of oil used by Samuel to anoint David" },
            { word: "sword", hint: "Weapon used by Peter to cut off ear" },
            { word: "spear", hint: "Weapon that pierced Jesus' side" },
            { word: "sling", hint: "Weapon used by David against Goliath" },
            { word: "arrow", hint: "Projectile weapon" },
            { word: "bread", hint: "Daily sustenance, provided by God" },
            { word: "tunic", hint: "Seamless garment of Jesus, gambled by soldiers" },
            { word: "flask", hint: "Jar of oil used by Samuel to anoint David" },
            { word: "money", hint: "Currencies, coins, or silver used for commerce, taxes, and trade" },
            { word: "scale", hint: "Weight used for measuring goods" },
            { word: "stone", hint: "Used for building, altars, and tablets of law, as well as a powerful metaphor for Christ as the foundation." },
            { word: "water", hint: "Essential for physical life and heavily used to symbolize spiritual cleansing, baptism, and eternal life." },
            { word: "grass", hint: "Grown in the fields, used for food and pasture" }



        ],
        events: [
            { word: "flood", hint: "Great deluge in Noah's time" },
            { word: "birth", hint: "Birth of Jesus in Bethlehem" },
            { word: "death", hint: "Crucifixion of Jesus on the cross" },
            { word: "feast", hint: "Passover, Tabernacles, Pentecost" },
            { word: "exile", hint: "Babylonian captivity" },
            { word: "storm", hint: "Tempestuous weather, as in the story of Jonah" },
            { word: "quake", hint: "Earthquake, as in the story of Jesus calming the sea" }
        ],
        concepts: [
            { word: "grace", hint: "Unmerited favor from God" },
            { word: "faith", hint: "Belief and trust in God" },
            { word: "truth", hint: "Jesus said 'I am the ___'" },
            { word: "light", hint: "Jesus is the ___ of the world" },
            { word: "bread", hint: "Jesus is the ___ of life" },
            { word: "water", hint: "Living ___ offered to Samaritan woman" },
            { word: "peace", hint: "Shalom, left by Jesus to disciples" },
            { word: "mercy", hint: "Compassion shown to the undeserving" },
            { word: "glory", hint: "Radiance of God's presence, often seen in visions" },
            { word: "wrath", hint: "Divine anger, often depicted in the Old Testament" },
            { word: "honor", hint: "Respect and reverence, especially towards God and parents" },
            { word: "light", hint: "A powerful concept representing purity, holiness, divine knowledge, and salvation, contrasted sharply with the darkness of sin." },
        ]
    },

    // ==================== 6-LETTER WORDS ====================
    6: {
        people: [
            { word: "daniel", hint: "Lion's den survivor" },
            { word: "elijah", hint: "Prophet taken to heaven in whirlwind" },
            { word: "esther", hint: "Queen who saved Jews from Haman" },
            { word: "haggai", hint: "Prophet who encouraged rebuilding temple" },
            { word: "hannah", hint: "Mother of Samuel, prayed for a child" },
            { word: "isaiah", hint: "Prophet who saw the Lord's train fill the temple" },
            { word: "japeth", hint: "Son of Noah, ancestor of Asian nations" },
            { word: "joseph", hint: "Dreamer, sold into slavery, became ruler in Egypt" },
            { word: "philip", hint: "Philip the apostle, brought Nathanael to Jesus" },
            { word: "samuel", hint: "Prophet who anointed David" },
            { word: "thomas", hint: "Thomas the doubting disciple" },
            { word: "nathan", hint: "Prophet who confronted David about his sin" },
            { word: "gideon", hint: "Judge who defeated the Midianites with 300 men" },
            { word: "rachel", hint: "Mother of Joseph and Benjamin, wife of Jacob" },
            { word: "martha", hint: "Sister of Lazarus and Mary, host to Jesus" },
            { word: "michal", hint: "King Saul's daughter and the first wife of King David." },
            { word: "andrew", hint: "Fisherman and disciple of Jesus" },
            { word: "simeon", hint: "Simon Peter's alternative name" },

        ],
        places: [
            { word: "arabia", hint: "Where Paul went after conversion" },
            { word: "ararat", hint: "Mountain where Noah's ark came to rest" },
            { word: "athens", hint: "City of philosophers where Paul spoke" },
            { word: "athens", hint: "City of philosophers where Paul spoke" },
            { word: "canaan", hint: "Promised Land flowing with milk and honey" },
            { word: "cyprus", hint: "Island visited by Barnabas and Paul" },
            { word: "cyprus", hint: "Island visited by Barnabas and Paul" },
            { word: "hebron", hint: "City of Abraham, Isaac, and Jacob" },
            { word: "idumea", hint: "Land of Edom, south of Judea" },
            { word: "jordan", hint: "River where Israelites crossed into Canaan" },
            { word: "shiloh", hint: "The major religious center of Israel during the period of the Judges" },
            { word: "tarsus", hint: "City in Cilicia where Paul was born" }
        ],
        animals: [
            { word: "badger", hint: "Large mammal, known for digging burrows. Modern translations often interpret this animal as a sea cow, dugong, or goat." },
            { word: "donkey", hint: "Animal Jesus rode into Jerusalem" },
            { word: "falcon", hint: "Bird of prey, often used in biblical imagery" },
            { word: "hornet", hint: "Insect that can be a symbol of divine judgment" },
            { word: "jackal", hint: "Howling animal, often in ruins" },
            { word: "lizard", hint: "Creeping thing, considered unclean" },
            { word: "locust", hint: "John the Baptist ate these with honey" },
            { word: "pigeon", hint: "Along with the dove, this bird was allowed as a sacrificial offering for the poor who could not afford a lamb." },
            { word: "weasel", hint: "Small crawling unclean carnivorous mammal, often used metaphorically for cunning or deceit" }
        ],
        things: [
            { word: "basket", hint: "A woven container for carrying items" },
            { word: "cymbal", hint: "Clashing instrument in Psalms" },
            { word: "hammer", hint: "Tool used for building and construction, also used metaphorically for judgment or execution" },
            { word: "helmet", hint: "Piece of armor, helmet of salvation" },
            { word: "pillar", hint: "Supporting structure, often used metaphorically for stability" },
            { word: "quiver", hint: "Container for arrows, symbol of readiness for spiritual warfare" },
            { word: "sandal", hint: "Footwear, removed in redemption custom" },
            { word: "sandal", hint: "Footwear, removed in redemption custom" },
            { word: "scroll", hint: "Book form in ancient times" },
            { word: "shield", hint: "Protective armor, God is our shield" },
            { word: "silver", hint: "Precious metal, used for currency and offerings" },
            { word: "tablet", hint: "Stone tablets of Ten Commandments" },
            { word: "temple", hint: "Solomon's Temple, destroyed and rebuilt" },
            { word: "throne", hint: "Seat of King Solomon, symbol of authority" }
        ],
        events: [
            { word: "exodus", hint: "Departure from Egyptian slavery" },
            { word: "plague", hint: "Ten plagues sent upon Egypt" },
            { word: "return", hint: "Return from exile under Zerubbabel" },
            { word: "burial", hint: "The act of depositing a body in the ground" },
            { word: "famine", hint: "Period of severe scarcity of food" },
            { word: "winter", hint: "Season of cold weather" }
        ],
        concepts: [
            { word: "church", hint: "Body of Christ, assembly of believers" },
            { word: "martyr", hint: "Witness killed for faith" },
            { word: "praise", hint: "Expression of admiration and worship" },
            { word: "prayer", hint: "Communication with God" },
            { word: "redeem", hint: "To buy back from slavery" },
            { word: "repent", hint: "Turn away from sin" },
            { word: "savior", hint: "Jesus, the one who saves" }
        ]
    },

    // ==================== 7-LETTER WORDS ====================
    7: {
        people: [
            { word: "abigail", hint: "Wise wife of Nabal, later married David" },
            { word: "abraham", hint: "Father of faith, originally named Abram" },
            { word: "absalom", hint: "Son of David, rebelled against his father" },
            { word: "barnabas", hint: "Apostle, also called the Son of encouragement" },
            { word: "debora", hint: "Judge of Israel, wife of Lapidoth" },
            { word: "elijah", hint: "Prophet taken to heaven in whirlwind" },
            { word: "elisha", hint: "Successor of Elijah, performed miracles" },
            { word: "ezekiel", hint: "Prophet of valley of dry bones vision" },
            { word: "gabriel", hint: "Archangel, messenger of God" },
            { word: "goliath", hint: "Giant defeated by David with a sling" },
            { word: "ishmael", hint: "Son of Abraham, ancestor of Arab nations" },
            { word: "jezebel", hint: "Phoenician princess who promoted Baal worship" },
            { word: "lazarus", hint: "Brother of Mary and Martha, raised from dead" },
            { word: "malachi", hint: "Last prophet of Old Testament" },
            { word: "matthew", hint: "Matthew the tax collector turned apostle" },
            { word: "michael", hint: "Archangel, leader of God's army" },
            { word: "solomon", hint: "Son of David, built the temple, known for wisdom" },
            { word: "timothy", hint: "Young pastor, recipient of two epistles" },
            { word: "zebedee", hint: "Father of James and John, disciples of Jesus" }
        ],
        places: [
            { word: "antioch", hint: "City where Paul and Barnabas preached" },
            { word: "assyria", hint: "Empire that exiled Israel" },
            { word: "babylon", hint: "Empire that exiled Judah" },
            { word: "bethany", hint: "Home of Lazarus, Martha, Mary" },
            { word: "corinth", hint: "City with problematic church" },
            { word: "ephesus", hint: "City with church that left first love" },
            { word: "galilee", hint: "Region of Jesus' early ministry" },
            { word: "jericho", hint: "Walls fell after marching around" },
            { word: "nineveh", hint: "City of Assyria, where Jonah preached" },
            { word: "samaria", hint: "Capital of the Northern Kingdom of Israel" }
        ],
        animals: [
            { word: "buzzard", hint: "Large bird of prey, unclean" },
            { word: "chamois", hint: "A type of wild mountain goat or sheep explicitly approved as clean and fit for human consumption under Deuteronomy's dietary guidelines." },
            { word: "cricket", hint: "One of the few leaping insects designated as safe to eat under Levitical law, grouped alongside locusts and grasshoppers." },
            { word: "gazelle", hint: "A swift, graceful animal frequently used in Old Testament poetry" },
            { word: "leopard", hint: "Spotted cat, symbol of speed" },
            { word: "ostrich", hint: "Large flightless bird, mentioned in Psalms and Job" },
            { word: "serpent", hint: "Tempted Eve in Garden of Eden" },
            { word: "sparrow", hint: "Small bird, mentioned in Matthew 10:29" },
            { word: "vulture", hint: "Bird of prey, unclean" },
        ],
        things: [
            { word: "chariot", hint: "Vehicle drawn by horses, used by kings" },
            { word: "cistern", hint: "Underground water storage facility" },
            { word: "curtain", hint: "Screen or partition, used in temple and tabernacle" },
            { word: "furnace", hint: "Metalworking oven, used in Daniel's story" },
            { word: "garment", hint: "Term encompassing various pieces of clothing, robes, or cloaks worn by individuals." },
            { word: "incense", hint: "Aromatic substance used in worship and sacrifices" },
            { word: "lantern", hint: "Light source used in biblical times" },
            { word: "pitcher", hint: "Clay jar used by Gideon and Rebekah" },
            { word: "sceptre", hint: "Royal rod, symbol of Judah's rule" },
            { word: "scourge", hint: "Whip used for punishment" },
            { word: "trumpet", hint: "Ram's horn used to signal and worship" }
        ],
        events: [
            { word: "sabbath", hint: "Day of rest, seventh day" },
            { word: "jubilee", hint: "Year of release, every 50th year" },
            { word: "baptism", hint: "Washing with water, new birth" },
            { word: "harvest", hint: "Season of gathering crops" },
            { word: "healing", hint: "Restoration of health by God" },
            { word: "journey", hint: "Travel or pilgrimage" },
            { word: "miracle", hint: "Supernatural act of God" },
            { word: "warfare", hint: "Conflict or battle" },
            { word: "wedding", hint: "Ceremony of union in marriage" },

        ],
        concepts: [
            { word: "baptism", hint: "Washing with water, new birth" },
            { word: "charity", hint: "Unconditional love, the greatest of all virtues" },
            { word: "command", hint: "Divine instruction or mandate" },
            { word: "forgive", hint: "To pardon someone's sins" },
            { word: "freedom", hint: "The spiritual state of liberty and release from the binding power of sin, legalism, and eternal condemnation" },
            { word: "justice", hint: "Righteous judgment of God" },
            { word: "justice", hint: "Righteous judgment of God" },
            { word: "promise", hint: "God's pledge to Abraham, David" },
            { word: "respect", hint: "Honor and consideration for others" },
            { word: "worship", hint: "Adoration and praise to God" }
        ]
    }
};

// Helper functions
export const getWordList = (wordLength, category) => {
    if (!BIBLE_WORDS[wordLength] || !BIBLE_WORDS[wordLength][category]) {
        return [];
    }
    return BIBLE_WORDS[wordLength][category];
};

export const getAllValidBibleWords = () => {
    const allWords = new Set();
    [5, 6, 7].forEach(length => {
        Object.keys(BIBLE_WORDS[length]).forEach(category => {
            BIBLE_WORDS[length][category].forEach(item => {
                allWords.add(item.word.toLowerCase());
            });
        });
    });
    return allWords;
};

export const GAME_CONFIG = {
    wordLengths: [5, 6, 7],
    categories: {
        people: "👥 People",
        places: "📍 Places",
        animals: "🦁 Animals",
        things: "📦 Things",
        events: "📅 Events",
        concepts: "💡 Concepts"
    }
};