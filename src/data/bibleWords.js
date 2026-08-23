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
            { word: "achan", hint: "Israelite who disobeyed God at the fall of Jericho" },
            { word: "caleb", hint: "Faithful spy who wholly followed God into Canaan" },
            { word: "asher", hint: "Son of Jacob, founder of one of the 12 tribes" },
            { word: "david", hint: "Shepherd boy who became king, defeated Goliath" },
            { word: "elihu", hint: "Youngest friend of Job who spoke about God's justice" },
            { word: "enoch", hint: "Walked with God and was taken up without dying" },
            { word: "gomer", hint: "Wife of Hosea, symbol of Israel's unfaithfulness" },
            { word: "hagar", hint: "Egyptian servant of Sarah, mother of Ishmael" },
            { word: "haman", hint: "Opponent of Esther, hanged on his own gallows" },
            { word: "isaac", hint: "Son of Abraham, almost sacrificed by his father" },
            { word: "jacob", hint: "Father of the 12 tribes of Israel" },
            { word: "james", hint: "Son of Zebedee, brother of John, apostle" },
            { word: "jesus", hint: "Son of God, Savior of the world" },
            { word: "jesse", hint: "Father of King David" },
            { word: "judah", hint: "Son of Jacob, tribe of kings including David" },
            { word: "judas", hint: "Betrayed Jesus with a kiss" },
            { word: "laban", hint: "Father of Rachel and Leah, Jacob's father-in-law" },
            { word: "lydia", hint: "Seller of purple cloth, first convert in Philippi" },
            { word: "jonah", hint: "Prophet swallowed by a great fish for fleeing God" },
            { word: "moses", hint: "Led Israelites out of Egypt, received the Law" },
            { word: "nahum", hint: "Prophet who foretold the downfall of Nineveh" },
            { word: "naomi", hint: "Ruth's mother-in-law who returned with her to Bethlehem" },
            { word: "orpah", hint: "Ruth's sister-in-law who stayed in Moab" },
            { word: "peter", hint: "Disciple who denied Jesus three times" },
            { word: "rahab", hint: "Jericho woman who hid the spies and was spared" },
            { word: "sarah", hint: "Wife of Abraham, mother of Isaac" },
            { word: "silas", hint: "Missionary companion of Paul, jailed at Philippi" },
            { word: "simon", hint: "Original name of Peter; also a Zealot disciple" },
            { word: "tamar", hint: "Daughter-in-law of Judah, mother of Perez and Zerah" },
            { word: "titus", hint: "Companion of Paul, recipient of an epistle" }
        ],
        places: [
            { word: "egypt", hint: "Land where Israelites were slaves" },
            { word: "ekron", hint: "Philistine city whose god was Baal-zebub" },
            { word: "etham", hint: "Campsite on the edge of the wilderness" },
            { word: "gerar", hint: "Philistine city where Isaac dug wells" },
            { word: "haran", hint: "City where Abraham lived before going to Canaan" },
            { word: "horeb", hint: "Another name for Mount Sinai, where Moses saw the burning bush" },
            { word: "joppa", hint: "Port city Jonah fled from, where Peter raised Tabitha" },
            { word: "judea", hint: "Roman province, home of Jesus" },
            { word: "marah", hint: "Bitter waters turned sweet by Moses" },
            { word: "merom", hint: "Waters where Joshua defeated a northern coalition" },
            { word: "salem", hint: "City of Melchizedek, early name for Jerusalem" },
            { word: "sidon", hint: "Ancient Phoenician port, often paired with Tyre" },
            { word: "sinai", hint: "Mountain where Moses received the Law" },
            { word: "sodom", hint: "City of the plain, destroyed for its sin" }
        ],
        animals: [
            { word: "camel", hint: "Ship of the desert, eye-of-the-needle fame" },
            { word: "cobra", hint: "Venomous snake, symbol of evil" },
            { word: "coney", hint: "Rock-dwelling creature declared unclean in Leviticus" },
            { word: "eagle", hint: "Renews strength like those who wait on the Lord" },
            { word: "heron", hint: "Water bird listed among the unclean" },
            { word: "horse", hint: "War animal some trusted instead of the Lord" },
            { word: "quail", hint: "Bird God sent as meat in the wilderness" },
            { word: "raven", hint: "First bird Noah sent out from the ark" },
            { word: "sheep", hint: "Animal central to sacrifice and shepherd imagery" },
            { word: "snail", hint: "Creature said to melt away in a Psalm lament" },
            { word: "snake", hint: "Crafty beast in the Garden of Eden" },
            { word: "stork", hint: "Unclean bird that faithfully tends its young" },
            { word: "swine", hint: "Unclean animal the prodigal son fed" },
            { word: "viper", hint: "Poisonous snake John the Baptist called his hearers" }
        ],
        things: [
            { word: "altar", hint: "Place of sacrifice, built by Noah, Abraham, etc." },
            { word: "arrow", hint: "Projectile shot from a bow" },
            { word: "bread", hint: "Daily sustenance, provided by God" },
            { word: "cloak", hint: "Outer garment sometimes taken in pledge" },
            { word: "crown", hint: "Thorny one placed on Jesus' head" },
            { word: "ephod", hint: "Sacred garment worn by Israel's high priest" },
            { word: "flask", hint: "Oil jar Samuel poured over Saul at his anointing" },
            { word: "grass", hint: "Field growth that withers, unlike God's word" },
            { word: "linen", hint: "Fine white fabric worn by priests" },
            { word: "manna", hint: "Bread from heaven in the wilderness" },
            { word: "mitre", hint: "Priestly turban worn by Aaron (KJV spelling)" },
            { word: "money", hint: "Coins and silver used for commerce and taxes" },
            { word: "olive", hint: "Tree whose oil fueled lamps and anointing" },
            { word: "scale", hint: "Balance used for honest weights in trade" },
            { word: "sling", hint: "Weapon David used against Goliath" },
            { word: "spear", hint: "Weapon that pierced Jesus' side" },
            { word: "spoon", hint: "Utensil of incense used in offerings" },
            { word: "staff", hint: "Rod of Moses and Aaron that became a serpent" },
            { word: "stone", hint: "Building block of altars and tablets of law" },
            { word: "sword", hint: "Weapon Peter swung in Gethsemane" },
            { word: "tunic", hint: "Seamless garment gambled for by soldiers" },
            { word: "wheat", hint: "Grain of harvest fields, ground for bread" },
            { word: "water", hint: "Essential for life, picture of cleansing and baptism" }
        ],
        events: [
            { word: "birth", hint: "Birth of Jesus in Bethlehem" },
            { word: "death", hint: "Crucifixion of Jesus on the cross" },
            { word: "dream", hint: "Night vision given to Joseph and Pharaoh alike" },
            { word: "exile", hint: "Babylonian captivity" },
            { word: "feast", hint: "Passover, Tabernacles, Pentecost" },
            { word: "flood", hint: "Great deluge in Noah's time" },
            { word: "quake", hint: "Earthquake when Jesus died; shook open a prison for Paul" },
            { word: "siege", hint: "Army encirclement of a city, as Jerusalem endured" },
            { word: "storm", hint: "Tempestuous weather, as in the story of Jonah" },
            { word: "trial", hint: "Legal hearing Jesus faced before the Sanhedrin" }
        ],
        concepts: [
            { word: "faith", hint: "Belief and trust in God" },
            { word: "glory", hint: "Radiance of God's presence, often seen in visions" },
            { word: "grace", hint: "Unmerited favor from God" },
            { word: "honor", hint: "Respect owed especially to God and parents" },
            { word: "light", hint: "Jesus said 'I am the ___ of the world'" },
            { word: "bread", hint: "Jesus called Himself the living ___ from heaven" },
            { word: "mercy", hint: "Compassion shown to the undeserving" },
            { word: "peace", hint: "Shalom, left by Jesus to disciples" },
            { word: "trust", hint: "Firm reliance on God's character and promises" },
            { word: "truth", hint: "Jesus is full of grace and this (John 1:14)" },
            { word: "unity", hint: "Believers dwelling together as one, prized in Psalm 133" },
            { word: "water", hint: "Living ___ Jesus offered the Samaritan woman" },
            { word: "wrath", hint: "Divine anger, often depicted in the Old Testament" }
        ]
    },

    // ==================== 6-LETTER WORDS ====================
    6: {
        people: [
            { word: "andrew", hint: "Fisherman and disciple of Jesus" },
            { word: "bilhah", hint: "Handmaid of Rachel, mother of Dan and Naphtali" },
            { word: "daniel", hint: "Survivor of the lions' den" },
            { word: "elijah", hint: "Prophet taken up to heaven in a whirlwind" },
            { word: "elisha", hint: "Successor of Elijah who received a double portion" },
            { word: "esther", hint: "Queen who saved her people from Haman" },
            { word: "gideon", hint: "Judge who defeated Midianites with 300 men" },
            { word: "haggai", hint: "Prophet who urged rebuilding the temple" },
            { word: "hannah", hint: "Mother of Samuel, prayed earnestly for a child" },
            { word: "isaiah", hint: "Prophet who saw the Lord high in the temple" },
            { word: "joanna", hint: "Wife of Chuza who supported Jesus' ministry" },
            { word: "joseph", hint: "Dreamer sold into slavery, became ruler in Egypt" },
            { word: "josiah", hint: "Boy king who repaired the temple and restored Passover" },
            { word: "martha", hint: "Sister of Lazarus and Mary, hostess to Jesus" },
            { word: "michal", hint: "Saul's daughter and first wife of King David" },
            { word: "miriam", hint: "Sister of Moses who led praise with a tambourine" },
            { word: "nathan", hint: "Prophet who confronted David about his sin" },
            { word: "phoebe", hint: "Servant of the church at Cenchreae, commended by Paul" },
            { word: "philip", hint: "Apostle who brought Nathanael to Jesus" },
            { word: "rachel", hint: "Mother of Joseph and Benjamin, wife of Jacob" },
            { word: "samuel", hint: "Prophet who anointed both Saul and David" },
            { word: "simeon", hint: "Righteous man who blessed baby Jesus in the temple" },
            { word: "thomas", hint: "Disciple who doubted until he saw Jesus' wounds" }
        ],
        places: [
            { word: "arabia", hint: "Where Paul went after his conversion" },
            { word: "ararat", hint: "Mountain range where Noah's ark came to rest" },
            { word: "ashdod", hint: "Philistine city where the ark caused plagues" },
            { word: "athens", hint: "City of philosophers where Paul preached" },
            { word: "bethel", hint: "Sanctuary where Jacob saw a stairway to heaven" },
            { word: "canaan", hint: "Promised Land flowing with milk and honey" },
            { word: "cyprus", hint: "Island visited by Barnabas and Paul" },
            { word: "emmaus", hint: "Village where the risen Jesus walked with two disciples" },
            { word: "goshen", hint: "Region of Egypt where Jacob's family settled" },
            { word: "hebron", hint: "City of Abraham and David's first capital" },
            { word: "idumea", hint: "Land of Edom, south of Judea" },
            { word: "jordan", hint: "River of Israel's crossing and Jesus' baptism" },
            { word: "shiloh", hint: "Religious center of Israel during the Judges" },
            { word: "tarsus", hint: "City in Cilicia where Paul was born" }
        ],
        animals: [
            { word: "badger", hint: "Animal whose skins covered the tabernacle" },
            { word: "beetle", hint: "Leaping insect permitted as food (KJV, Leviticus)" },
            { word: "donkey", hint: "Animal Jesus rode into Jerusalem" },
            { word: "falcon", hint: "Bird of prey listed among the unclean" },
            { word: "hornet", hint: "Insect God used to drive out enemies of Israel" },
            { word: "jackal", hint: "Howling scavenger haunting ruined cities" },
            { word: "lizard", hint: "Creeping thing considered unclean" },
            { word: "locust", hint: "Plague insect eaten by John the Baptist" },
            { word: "pigeon", hint: "Bird offered by the poor instead of a lamb" },
            { word: "rabbit", hint: "Chews cud yet has an unsplit hoof, so unclean" },
            { word: "spider", hint: "Weaver of fragile webs compared to futile trust" },
            { word: "weasel", hint: "Small unclean rodent-like creature in Leviticus" }
        ],
        things: [
            { word: "basket", hint: "Container holding leftovers of feeding miracles" },
            { word: "bronze", hint: "Metal of the altar, laver, and serpent on a pole" },
            { word: "cymbal", hint: "Clashing instrument of Psalm 150" },
            { word: "garlic", hint: "Egyptian food the wilderness generation missed" },
            { word: "hammer", hint: "Tool likened to God's word breaking rock" },
            { word: "helmet", hint: "Armor piece called the hope of salvation" },
            { word: "pillar", hint: "Column of cloud and fire that guided Israel" },
            { word: "quiver", hint: "Arrow case; children are like arrows in one" },
            { word: "sandal", hint: "Footwear removed to seal a redemption deal" },
            { word: "scroll", hint: "Rolled book Ezekiel ate and Jesus read aloud" },
            { word: "shield", hint: "Protection; God is ours" },
            { word: "signet", hint: "Ring sealing royal decrees in wax" },
            { word: "silver", hint: "Metal of Judas' betrayal price" },
            { word: "tablet", hint: "Stone slabs carrying the Ten Commandments" },
            { word: "temple", hint: "Solomon's house of the Lord, later rebuilt" },
            { word: "throne", hint: "Seat of royal authority, famed ivory one of Solomon" },
            { word: "vessel", hint: "Container believers should keep honorable" }
        ],
        events: [
            { word: "burial", hint: "Laying a body to rest, as Nicodemus did for Jesus" },
            { word: "exodus", hint: "Departure from Egyptian slavery" },
            { word: "famine", hint: "Severe food shortage that drove Jacob to Egypt" },
            { word: "plague", hint: "Ten judgments sent upon Egypt" },
            { word: "return", hint: "Remnant's homecoming under Zerubbabel" },
            { word: "winter", hint: "Season Paul asked Timothy to arrive before" }
        ],
        concepts: [
            { word: "church", hint: "Body of Christ, assembly of believers" },
            { word: "gospel", hint: "Good news of Christ's death and resurrection" },
            { word: "martyr", hint: "Witness killed for the faith, like Stephen" },
            { word: "praise", hint: "Expression of admiration and worship" },
            { word: "prayer", hint: "Communication with God" },
            { word: "redeem", hint: "To buy back, as Boaz did as kinsman-redeemer" },
            { word: "repent", hint: "Turn away from sin toward God" },
            { word: "savior", hint: "Jesus, the one who saves" },
            { word: "spirit", hint: "Holy ___ promised to guide believers into truth" },
            { word: "wisdom", hint: "What Solomon asked for instead of riches" }
        ]
    },

    // ==================== 7-LETTER WORDS ====================
    7: {
        people: [
            { word: "abigail", hint: "Wise wife of Nabal, later married David" },
            { word: "abraham", hint: "Father of faith, originally named Abram" },
            { word: "absalom", hint: "Son of David who rebelled against him" },
            { word: "cleopas", hint: "Disciple who met the risen Jesus on the Emmaus road" },
            { word: "deborah", hint: "Judge of Israel, wife of Lapidoth" },
            { word: "delilah", hint: "Woman who betrayed Samson for silver" },
            { word: "ezekiel", hint: "Prophet of the valley of dry bones vision" },
            { word: "gabriel", hint: "Archangel who announced Jesus' birth" },
            { word: "goliath", hint: "Giant defeated by David with a sling" },
            { word: "ishmael", hint: "Firstborn son of Abraham through Hagar" },
            { word: "jezebel", hint: "Phoenician queen who promoted Baal worship" },
            { word: "lazarus", hint: "Brother of Mary and Martha, raised from the dead" },
            { word: "malachi", hint: "Last prophet in the Old Testament order" },
            { word: "matthew", hint: "Tax collector turned gospel writer" },
            { word: "michael", hint: "Archangel leading heaven's armies" },
            { word: "solomon", hint: "Son of David famed for wisdom, built the temple" },
            { word: "stephen", hint: "First Christian martyr, stoned while forgiving" },
            { word: "timothy", hint: "Young pastor, recipient of two epistles" },
            { word: "zebedee", hint: "Father of James and John, two disciples" }
        ],
        places: [
            { word: "antioch", hint: "City where believers were first called Christians" },
            { word: "assyria", hint: "Empire that exiled the northern kingdom" },
            { word: "babylon", hint: "Empire that exiled Judah" },
            { word: "bethany", hint: "Home of Lazarus, Martha, and Mary" },
            { word: "corinth", hint: "Greek city with a troublesome church" },
            { word: "ephesus", hint: "City whose church left its first love" },
            { word: "galilee", hint: "Region of Jesus' early ministry" },
            { word: "jericho", hint: "City whose walls fell after marching" },
            { word: "megiddo", hint: "Fortress city beside the plain of Armageddon" },
            { word: "nineveh", hint: "Assyrian city where Jonah preached" },
            { word: "samaria", hint: "Omri's capital; Jesus spoke there to a woman at a well" },
            { word: "shechem", hint: "Where Abram built his first altar in Canaan" },
            { word: "shushan", hint: "Palace city of Esther and Nehemiah (KJV name)" }
        ],
        animals: [
            { word: "buzzard", hint: "Large carrion bird, unclean" },
            { word: "chamois", hint: "Mountain goat in some translations of Deuteronomy's clean animals" },
            { word: "cricket", hint: "Leaping insect allowed as food in Levitical law" },
            { word: "gazelle", hint: "Swift graceful animal, a picture of love in Song of Songs" },
            { word: "leopard", hint: "Spotted cat that cannot change its spots" },
            { word: "ostrich", hint: "Flightless bird pictured as foolishly careless of eggs" },
            { word: "peacock", hint: "Exotic bird among Solomon's imported treasures (KJV)" },
            { word: "serpent", hint: "Tempted Eve in the Garden of Eden" },
            { word: "sparrow", hint: "Cheap bird God still watches over, per Matthew" },
            { word: "vulture", hint: "Carrion bird gathering where the fall is" }
        ],
        things: [
            { word: "chariot", hint: "Horse-drawn vehicle; Elijah rode a fiery one" },
            { word: "cistern", hint: "Water store; forsaking God is trading for broken ones" },
            { word: "curtain", hint: "Temple veil torn top to bottom when Jesus died" },
            { word: "furnace", hint: "Fiery oven Nebuchadnezzar heated seven times" },
            { word: "garment", hint: "General term for clothing, robes, or cloaks" },
            { word: "incense", hint: "Aromatic smoke picturing prayers rising" },
            { word: "lantern", hint: "Light carriers brought to arrest Jesus" },
            { word: "pitcher", hint: "Clay water jar of Rebekah and Gideon's torchmen" },
            { word: "sceptre", hint: "Royal rod extended to Queen Esther (KJV spelling)" },
            { word: "scourge", hint: "Whip used for punishment" },
            { word: "timbrel", hint: "Tambourine Miriam danced with at the Red Sea" },
            { word: "trumpet", hint: "Ram's horn blown at Jericho and Jubilee" }
        ],
        events: [
            { word: "baptism", hint: "Water rite Jesus received from John" },
            { word: "harvest", hint: "Gathering season; plentiful, workers few" },
            { word: "healing", hint: "Restoration of health, a hallmark of Jesus' ministry" },
            { word: "journey", hint: "Travel or pilgrimage, like Mary and Joseph's" },
            { word: "jubilee", hint: "Year of liberty and land restoration every fiftieth year" },
            { word: "miracle", hint: "Supernatural act of God" },
            { word: "sabbath", hint: "Day of rest on the seventh day" },
            { word: "victory", hint: "Triumph through Christ over sin and the grave" },
            { word: "warfare", hint: "Conflict; believers fight one of faith" },
            { word: "wedding", hint: "Marriage feast, as at Cana of Galilee" }
        ],
        concepts: [
            { word: "comfort", hint: "Consolation God gives; the Spirit is our Comforter" },
            { word: "charity", hint: "Unconditional love, greatest virtue (1 Corinthians 13)" },
            { word: "command", hint: "Divine instruction or mandate" },
            { word: "eternal", hint: "Everlasting, as the life God gives" },
            { word: "forgive", hint: "To pardon someone's sins" },
            { word: "freedom", hint: "Liberty from sin's power and condemnation" },
            { word: "justice", hint: "Righteous judgment; act justly, love mercy" },
            { word: "kingdom", hint: "Of God, the heart of Jesus' parables" },
            { word: "promise", hint: "God's pledge to Abraham and David" },
            { word: "respect", hint: "Honor and consideration for others" },
            { word: "steward", hint: "Manager of another's possessions; we manage God's" },
            { word: "worship", hint: "Adoration of God in spirit and truth" }
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
        people: "People",
        places: "Places",
        animals: "Animals",
        things: "Things",
        events: "Events",
        concepts: "Concepts"
    }
};
