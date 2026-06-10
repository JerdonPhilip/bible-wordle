// src/data/bibleWords.js
// Comprehensive Bible Word Database
// All words are exactly 5, 6, or 7 letters long.
// Categories: people, places, events, concepts, animals, things

export const BIBLE_WORDS = {
    // ==================== 5-LETTER WORDS ====================
    5: {
        people: [
            { word: "jesus", hint: "Son of God, Savior of the world" },
            { word: "enoch", hint: "Walked with God, taken up to heaven" },
            { word: "moses", hint: "Led Israelites out of Egypt, received Ten Commandments" },
            { word: "david", hint: "Shepherd boy who became king, defeated Goliath" },
            { word: "peter", hint: "Disciple who denied Jesus three times" },
            { word: "jacob", hint: "Father of 12 tribes of Israel" },
            { word: "judas", hint: "Betrayed Jesus with a kiss" },
            { word: "abram", hint: "Original name of Abraham before God changed it" },
            { word: "sarah", hint: "Wife of Abraham, mother of Isaac" },
            { word: "hagar", hint: "Egyptian servant of Sarah, mother of Ishmael" },
            { word: "isaac", hint: "Son of Abraham, almost sacrificed by his father" },
            { word: "abner", hint: "Commander of Saul's army, killed by Joab" },
            { word: "asher", hint: "Son of Jacob, founder of one of the 12 tribes" },
            { word: "judah", hint: "Son of Jacob, tribe of kings, including David and Jesus" },
            { word: "simon", hint: "Original name of Peter, also a zealot" },
            { word: "james", hint: "Son of Zebedee, brother of John, apostle" },
        ],
        places: [
            { word: "egypt", hint: "Land where Israelites were slaves" },
            { word: "sinia", hint: "Mountain where Moses received the Law" },
            { word: "cairo", hint: "Modern capital of Egypt, near biblical Memphis" },
            { word: "thebe", hint: "Ancient Egyptian city, Thebes" },
            { word: "etham", hint: "Place on the edge of the wilderness" },
            { word: "marah", hint: "Bitter waters turned sweet by Moses" },
            { word: "rephe", hint: "Rephidim, where Moses struck rock for water" },
            { word: "caper", hint: "Capernaum, Jesus' ministry base" },
            { word: "judea", hint: "Roman province, home of Jesus" },
            { word: "sodom", hint: "City of the plain, destroyed for its sin" }
        ],
        animals: [
            { word: "eagle", hint: "Renews its strength, symbol of God's care" },
            { word: "raven", hint: "First bird sent out by Noah" },
            { word: "stork", hint: "Migratory bird, known for caring for young" },
            { word: "heron", hint: "Water bird, considered unclean" },
            { word: "camel", hint: "Ship of the desert, eye of needle" },
            { word: "horse", hint: "War animal, not trusted by Psalmist" },
            { word: "hyena", hint: "Unclean animal, scavenger" },
            { word: "viper", hint: "Poisonous snake, brood of vipers" },
            { word: "snake", hint: "Creature in the Garden of Eden" },
            { word: "cobra", hint: "Venomous snake, symbol of evil" },
            { word: "snail", hint: "Mentioned in Psalms as melting away" },
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
        ],
        events: [
            { word: "flood", hint: "Great deluge in Noah's time" },
            { word: "birth", hint: "Birth of Jesus in Bethlehem" },
            { word: "death", hint: "Crucifixion of Jesus on the cross" },
            { word: "feast", hint: "Passover, Tabernacles, Pentecost" },
            { word: "exile", hint: "Babylonian captivity" },
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
            { word: "angel", hint: "Messenger of God" },
        ]
    },

    // ==================== 6-LETTER WORDS ====================
    6: {
        people: [
            { word: "elijah", hint: "Prophet taken to heaven in whirlwind" },
            { word: "esther", hint: "Queen who saved Jews from Haman" },
            { word: "joseph", hint: "Dreamer, sold into slavery, became ruler in Egypt" },
            { word: "samuel", hint: "Prophet who anointed David" },
            { word: "isaiah", hint: "Prophet who saw the Lord's train fill the temple" },
            { word: "daniel", hint: "Lion's den survivor" },
            { word: "hannah", hint: "Mother of Samuel, prayed for a child" },
            { word: "haggai", hint: "Prophet who encouraged rebuilding temple" },
            { word: "philip", hint: "Philip the apostle, brought Nathanael to Jesus" },
            { word: "thomas", hint: "Thomas the doubting disciple" },
            { word: "japeth", hint: "Son of Noah, ancestor of Asian nations" },
        ],
        places: [
            { word: "canaan", hint: "Promised Land flowing with milk and honey" },
            { word: "idumea", hint: "Land of Edom, south of Judea" },
            { word: "cyprus", hint: "Island visited by Barnabas and Paul" },
            { word: "arabia", hint: "Where Paul went after conversion" },
            { word: "athens", hint: "City of philosophers where Paul spoke" },
            { word: "ararat", hint: "Mountain where Noah's ark came to rest" }
        ],
        animals: [
            { word: "donkey", hint: "Animal Jesus rode into Jerusalem" },
            { word: "locust", hint: "John the Baptist ate these with honey" },
            { word: "jackal", hint: "Howling animal, often in ruins" },
            { word: "lizard", hint: "Creeping thing, considered unclean" },
        ],
        things: [
            { word: "tablet", hint: "Stone tablets of Ten Commandments" },
            { word: "scroll", hint: "Book form in ancient times" },
            { word: "temple", hint: "Solomon's Temple, destroyed and rebuilt" },
            { word: "sandal", hint: "Footwear, removed in redemption custom" },
            { word: "throne", hint: "Seat of King Solomon, symbol of authority" },
            { word: "cymbal", hint: "Clashing instrument in Psalms" },
            { word: "shield", hint: "Protective armor, God is our shield" },
            { word: "helmet", hint: "Piece of armor, helmet of salvation" },
        ],
        events: [
            { word: "exodus", hint: "Departure from Egyptian slavery" },
            { word: "plague", hint: "Ten plagues sent upon Egypt" },
            { word: "return", hint: "Return from exile under Zerubbabel" },
        ],
        concepts: [
            { word: "prayer", hint: "Communication with God" },
            { word: "redeem", hint: "To buy back from slavery" },
            { word: "savior", hint: "Jesus, the one who saves" },
            { word: "repent", hint: "Turn away from sin" },
            { word: "church", hint: "Body of Christ, assembly of believers" },
            { word: "martyr", hint: "Witness killed for faith" },
        ]
    },

    // ==================== 7-LETTER WORDS ====================
    7: {
        people: [
            { word: "ishmael", hint: "Son of Abraham, ancestor of Arab nations" },
            { word: "elijah", hint: "Prophet taken to heaven in whirlwind" },
            { word: "elisha", hint: "Successor of Elijah, performed miracles" },
            { word: "abraham", hint: "Father of faith, originally named Abram" },
            { word: "timothy", hint: "Young pastor, recipient of two epistles" },
            { word: "ezekiel", hint: "Prophet of valley of dry bones vision" },
            { word: "goliath", hint: "Giant defeated by David with a sling" },
            { word: "solomon", hint: "Son of David, built the temple, known for wisdom" },
            { word: "jezebel", hint: "Phoenician princess who promoted Baal worship" },
            { word: "malachi", hint: "Last prophet of Old Testament" },
            { word: "abigail", hint: "Wise wife of Nabal, later married David" },
            { word: "lazarus", hint: "Brother of Mary and Martha, raised from dead" },
            { word: "matthew", hint: "Matthew the tax collector turned apostle" },
        ],
        places: [
            { word: "jericho", hint: "Walls fell after marching around" },
            { word: "galilee", hint: "Region of Jesus' early ministry" },
            { word: "bethany", hint: "Home of Lazarus, Martha, Mary" },
            { word: "babylon", hint: "Empire that exiled Judah" },
            { word: "corinth", hint: "City with problematic church" },
            { word: "ephesus", hint: "City with church that left first love" },
        ],
        animals: [
            { word: "serpent", hint: "Tempted Eve in Garden of Eden" },
            { word: "vulture", hint: "Bird of prey, unclean" },
            { word: "leopard", hint: "Spotted cat, symbol of speed" },
        ],
        things: [
            { word: "sceptre", hint: "Royal rod, symbol of Judah's rule" },
            { word: "pitcher", hint: "Clay jar used by Gideon and Rebekah" },
            { word: "trumpet", hint: "Ram's horn used to signal and worship" },
        ],
        events: [
            { word: "sabbath", hint: "Day of rest, seventh day" },
            { word: "jubilee", hint: "Year of release, every 50th year" },
        ],
        concepts: [
            { word: "justice", hint: "Righteous judgment of God" },
            { word: "worship", hint: "Adoration and praise to God" },
            { word: "forgive", hint: "To pardon someone's sins" },
            { word: "prophet", hint: "Spokesperson for God" },
            { word: "apostle", hint: "Sent one, messenger" },
            { word: "promise", hint: "God's pledge to Abraham, David" },
            { word: "baptism", hint: "Washing with water, new birth" },
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