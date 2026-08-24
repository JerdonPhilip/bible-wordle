// src/data/bibleWords.js
// Comprehensive Bible Word Database
// All words are exactly 5, 6, or 7 letters long.
// Categories: people, places, events, concepts, animals, things
// Every entry carries a KJV `reference` used to fetch the victory verse.

export const BIBLE_WORDS = {
    // ==================== 5-LETTER WORDS ====================
    5: {
        people: [
            { word: "aaron", hint: "Brother of Moses, first high priest", reference: "Exodus 28:1" },
            { word: "abner", hint: "Commander of Saul's army, killed by Joab", reference: "2 Samuel 3:27" },
            { word: "abram", hint: "Original name of Abraham before God changed it", reference: "Genesis 12:1" },
            { word: "achan", hint: "Israelite who disobeyed God at the fall of Jericho", reference: "Joshua 7:1" },
            { word: "caleb", hint: "Faithful spy who wholly followed God into Canaan", reference: "Numbers 13:30" },
            { word: "asher", hint: "Son of Jacob, founder of one of the 12 tribes", reference: "Genesis 30:13" },
            { word: "david", hint: "Shepherd boy who became king, defeated Goliath", reference: "1 Samuel 17:45" },
            { word: "elihu", hint: "Youngest friend of Job who spoke about God's justice", reference: "Job 32:6" },
            { word: "enoch", hint: "Walked with God and was taken up without dying", reference: "Genesis 5:24" },
            { word: "gomer", hint: "Wife of Hosea, symbol of Israel's unfaithfulness", reference: "Hosea 1:3" },
            { word: "hagar", hint: "Egyptian servant of Sarah, mother of Ishmael", reference: "Genesis 16:1" },
            { word: "haman", hint: "Opponent of Esther, hanged on his own gallows", reference: "Esther 7:10" },
            { word: "isaac", hint: "Son of Abraham, almost sacrificed by his father", reference: "Genesis 22:9" },
            { word: "jacob", hint: "Father of the 12 tribes of Israel", reference: "Genesis 32:28" },
            { word: "james", hint: "Son of Zebedee, brother of John, apostle", reference: "Matthew 10:2" },
            { word: "jesus", hint: "Son of God, Savior of the world", reference: "Matthew 1:21" },
            { word: "jesse", hint: "Father of King David", reference: "1 Samuel 16:1" },
            { word: "judah", hint: "Son of Jacob, tribe of kings including David", reference: "Genesis 49:10" },
            { word: "judas", hint: "Betrayed Jesus with a kiss", reference: "Matthew 26:49" },
            { word: "laban", hint: "Father of Rachel and Leah, Jacob's father-in-law", reference: "Genesis 29:16" },
            { word: "lydia", hint: "Seller of purple cloth, first convert in Philippi", reference: "Acts 16:14" },
            { word: "jonah", hint: "Prophet swallowed by a great fish for fleeing God", reference: "Jonah 1:17" },
            { word: "moses", hint: "Led Israelites out of Egypt, received the Law", reference: "Exodus 3:14" },
            { word: "nahum", hint: "Prophet who foretold the downfall of Nineveh", reference: "Nahum 1:1" },
            { word: "naomi", hint: "Ruth's mother-in-law who returned with her to Bethlehem", reference: "Ruth 1:20" },
            { word: "orpah", hint: "Ruth's sister-in-law who stayed in Moab", reference: "Ruth 1:14" },
            { word: "peter", hint: "Disciple who denied Jesus three times", reference: "Matthew 26:75" },
            { word: "rahab", hint: "Jericho woman who hid the spies and was spared", reference: "Joshua 2:4" },
            { word: "sarah", hint: "Wife of Abraham, mother of Isaac", reference: "Genesis 21:2" },
            { word: "silas", hint: "Missionary companion of Paul, jailed at Philippi", reference: "Acts 16:25" },
            { word: "simon", hint: "Original name of Peter; also a Zealot disciple", reference: "John 1:42" },
            { word: "tamar", hint: "Daughter-in-law of Judah, mother of Perez and Zerah", reference: "Genesis 38:6" },
            { word: "titus", hint: "Companion of Paul, recipient of an epistle", reference: "Titus 1:4" }
        ],
        places: [
            { word: "egypt", hint: "Land where Israelites were slaves", reference: "Exodus 12:51" },
            { word: "ekron", hint: "Philistine city whose god was Baal-zebub", reference: "1 Samuel 5:10" },
            { word: "etham", hint: "Campsite on the edge of the wilderness", reference: "Exodus 13:20" },
            { word: "gerar", hint: "Philistine city where Isaac dug wells", reference: "Genesis 26:17" },
            { word: "haran", hint: "City where Abraham lived before going to Canaan", reference: "Genesis 11:31" },
            { word: "horeb", hint: "Another name for Mount Sinai, where Moses saw the burning bush", reference: "Exodus 3:1" },
            { word: "joppa", hint: "Port city Jonah fled from, where Peter raised Tabitha", reference: "Jonah 1:3" },
            { word: "judea", hint: "Roman province, home of Jesus", reference: "Luke 1:5" },
            { word: "marah", hint: "Bitter waters turned sweet by Moses", reference: "Exodus 15:23" },
            { word: "merom", hint: "Waters where Joshua defeated a northern coalition", reference: "Joshua 11:5" },
            { word: "salem", hint: "City of Melchizedek, early name for Jerusalem", reference: "Genesis 14:18" },
            { word: "sidon", hint: "Ancient Phoenician port, often paired with Tyre", reference: "Genesis 10:15" },
            { word: "sinai", hint: "Mountain where Moses received the Law", reference: "Exodus 19:20" },
            { word: "sodom", hint: "City of the plain, destroyed for its sin", reference: "Genesis 19:24" }
        ],
        animals: [
            { word: "camel", hint: "Ship of the desert, eye-of-the-needle fame", reference: "Matthew 19:24" },
            { word: "cobra", hint: "Venomous snake, symbol of evil", reference: "Deuteronomy 32:33" },
            { word: "coney", hint: "Rock-dwelling creature declared unclean in Leviticus", reference: "Leviticus 11:5" },
            { word: "eagle", hint: "Renews strength like those who wait on the Lord", reference: "Isaiah 40:31" },
            { word: "heron", hint: "Water bird listed among the unclean", reference: "Leviticus 11:19" },
            { word: "horse", hint: "War animal some trusted instead of the Lord", reference: "Psalm 20:7" },
            { word: "quail", hint: "Bird God sent as meat in the wilderness", reference: "Exodus 16:13" },
            { word: "raven", hint: "First bird Noah sent out from the ark", reference: "Genesis 8:7" },
            { word: "sheep", hint: "Animal central to sacrifice and shepherd imagery", reference: "Psalm 100:3" },
            { word: "snail", hint: "Creature said to melt away in a Psalm lament", reference: "Psalm 58:8" },
            { word: "snake", hint: "Crafty beast in the Garden of Eden", reference: "Luke 10:19" },
            { word: "stork", hint: "Unclean bird that faithfully tends its young", reference: "Jeremiah 8:7" },
            { word: "swine", hint: "Unclean animal the prodigal son fed", reference: "Luke 15:16" },
            { word: "viper", hint: "Poisonous snake John the Baptist called his hearers", reference: "Acts 28:3" },
            { word: "whale", hint: "Great fish sign Jesus likened to His burial", reference: "Matthew 12:40" }
        ],
        things: [
            { word: "altar", hint: "Place of sacrifice, built by Noah, Abraham, etc.", reference: "Genesis 8:20" },
            { word: "arrow", hint: "Projectile shot from a bow", reference: "1 Samuel 20:36" },
            { word: "bread", hint: "Daily sustenance, provided by God", reference: "John 6:35" },
            { word: "cloak", hint: "Outer garment sometimes taken in pledge", reference: "Exodus 22:26" },
            { word: "crown", hint: "Thorny one placed on Jesus' head", reference: "Matthew 27:29" },
            { word: "ephod", hint: "Sacred garment worn by Israel's high priest", reference: "Exodus 28:4" },
            { word: "flask", hint: "Oil jar Samuel poured over Saul at his anointing", reference: "1 Samuel 10:1" },
            { word: "grass", hint: "Field growth that withers, unlike God's word", reference: "Isaiah 40:8" },
            { word: "linen", hint: "Fine white fabric worn by priests", reference: "Leviticus 16:4" },
            { word: "manna", hint: "Bread from heaven in the wilderness", reference: "Exodus 16:31" },
            { word: "mitre", hint: "Priestly turban worn by Aaron (KJV spelling)", reference: "Exodus 29:6" },
            { word: "money", hint: "Coins and silver used for commerce and taxes", reference: "Matthew 17:27" },
            { word: "olive", hint: "Tree whose oil fueled lamps and anointing", reference: "Judges 9:9" },
            { word: "scale", hint: "Balance used for honest weights in trade", reference: "Leviticus 19:36" },
            { word: "sling", hint: "Weapon David used against Goliath", reference: "1 Samuel 17:40" },
            { word: "spoon", hint: "Golden utensil for incense offerings (KJV)", reference: "Numbers 7:14" },
            { word: "spear", hint: "Weapon that pierced Jesus' side", reference: "John 19:34" },
            { word: "staff", hint: "Rod of Moses and Aaron that became a serpent", reference: "Exodus 7:12" },
            { word: "stone", hint: "Building block of altars, memorials, and tablets", reference: "Joshua 4:3" },
            { word: "sword", hint: "Weapon Peter swung in Gethsemane", reference: "Matthew 26:51" },
            { word: "tunic", hint: "Seamless garment gambled for by soldiers", reference: "John 19:23" },
            { word: "wheat", hint: "Grain of harvest fields, ground for bread", reference: "John 12:24" },
            { word: "water", hint: "Essential for life, picture of cleansing and baptism", reference: "Revelation 22:17" }
        ],
        events: [
            { word: "birth", hint: "Birth of Jesus in Bethlehem", reference: "Luke 2:7" },
            { word: "death", hint: "Crucifixion of Jesus on the cross", reference: "John 19:30" },
            { word: "dream", hint: "Night vision given to Joseph and Pharaoh alike", reference: "Genesis 37:5" },
            { word: "exile", hint: "Babylonian captivity", reference: "2 Kings 24:14" },
            { word: "feast", hint: "Passover, Tabernacles, Pentecost", reference: "Exodus 12:14" },
            { word: "flood", hint: "Great deluge in Noah's time", reference: "Genesis 7:17" },
            { word: "quake", hint: "Earthquake when Jesus died; shook open a prison for Paul", reference: "Matthew 27:51" },
            { word: "siege", hint: "Army encirclement of a city, as Jerusalem endured", reference: "2 Kings 25:2" },
            { word: "storm", hint: "Tempestuous weather, as in the story of Jonah", reference: "Jonah 1:4" },
            { word: "trial", hint: "Legal hearing Jesus faced before Caiaphas", reference: "Matthew 26:57" }
        ],
        concepts: [
            { word: "faith", hint: "Belief and trust in God", reference: "Hebrews 11:1" },
            { word: "glory", hint: "Radiance of God's presence, often seen in visions", reference: "Isaiah 6:3" },
            { word: "grace", hint: "Unmerited favor from God", reference: "Ephesians 2:8" },
            { word: "honor", hint: "Respect owed especially to God and parents", reference: "Exodus 20:12" },
            { word: "light", hint: "Jesus said 'I am the ___ of the world'", reference: "John 8:12" },
            { word: "bread", hint: "Jesus called Himself the living ___ from heaven", reference: "John 6:51" },
            { word: "mercy", hint: "Compassion shown to the undeserving", reference: "Psalm 103:8" },
            { word: "peace", hint: "Shalom, left by Jesus to disciples", reference: "John 14:27" },
            { word: "trust", hint: "Firm reliance on God's character and promises", reference: "Proverbs 3:5" },
            { word: "truth", hint: "Jesus is full of grace and this (John 1:14)", reference: "John 1:14" },
            { word: "unity", hint: "Believers dwelling together as one, prized in Psalm 133", reference: "Psalm 133:1" },
            { word: "water", hint: "Living ___ Jesus offered the Samaritan woman", reference: "John 4:14" },
            { word: "wrath", hint: "Divine anger revealed against ungodliness", reference: "Romans 1:18" }
        ]
    },

    // ==================== 6-LETTER WORDS ====================
    6: {
        people: [
            { word: "andrew", hint: "Fisherman and disciple of Jesus", reference: "John 1:40" },
            { word: "bilhah", hint: "Handmaid of Rachel, mother of Dan and Naphtali", reference: "Genesis 30:3" },
            { word: "daniel", hint: "Survivor of the lions' den", reference: "Daniel 6:22" },
            { word: "elijah", hint: "Prophet taken up to heaven in a whirlwind", reference: "1 Kings 18:21" },
            { word: "elisha", hint: "Successor of Elijah who received a double portion", reference: "2 Kings 2:9" },
            { word: "esther", hint: "Queen who saved her people from Haman", reference: "Esther 4:14" },
            { word: "gideon", hint: "Judge who defeated Midianites with 300 men", reference: "Judges 7:7" },
            { word: "haggai", hint: "Prophet who urged rebuilding the temple", reference: "Haggai 1:8" },
            { word: "hannah", hint: "Mother of Samuel, prayed earnestly for a child", reference: "1 Samuel 1:27" },
            { word: "isaiah", hint: "Prophet who saw the Lord high in the temple", reference: "Isaiah 6:1" },
            { word: "joanna", hint: "Wife of Chuza who supported Jesus' ministry", reference: "Luke 8:3" },
            { word: "joseph", hint: "Dreamer sold into slavery, became ruler in Egypt", reference: "Genesis 37:28" },
            { word: "josiah", hint: "Boy king who repaired the temple and restored Passover", reference: "2 Kings 22:2" },
            { word: "martha", hint: "Sister of Lazarus and Mary, hostess to Jesus", reference: "Luke 10:40" },
            { word: "michal", hint: "Saul's daughter and first wife of King David", reference: "1 Samuel 18:27" },
            { word: "miriam", hint: "Sister of Moses who led praise with a tambourine", reference: "Exodus 15:20" },
            { word: "nathan", hint: "Prophet who confronted David about his sin", reference: "2 Samuel 12:7" },
            { word: "phoebe", hint: "Servant of the church commended by Paul", reference: "Romans 16:1" },
            { word: "philip", hint: "Apostle who brought Nathanael to Jesus", reference: "John 1:46" },
            { word: "rachel", hint: "Mother of Joseph and Benjamin, wife of Jacob", reference: "Genesis 30:24" },
            { word: "samuel", hint: "Prophet who anointed both Saul and David", reference: "1 Samuel 3:10" },
            { word: "simeon", hint: "Righteous man who blessed baby Jesus in the temple", reference: "Luke 2:28" },
            { word: "thomas", hint: "Disciple who doubted until he saw Jesus' wounds", reference: "John 20:27" }
        ],
        places: [
            { word: "arabia", hint: "Where Paul went after his conversion", reference: "Galatians 1:17" },
            { word: "ararat", hint: "Mountain range where Noah's ark came to rest", reference: "Genesis 8:4" },
            { word: "ashdod", hint: "Philistine city where the ark caused plagues", reference: "1 Samuel 5:1" },
            { word: "athens", hint: "City of philosophers where Paul preached", reference: "Acts 17:22" },
            { word: "bethel", hint: "Sanctuary where Jacob saw a stairway to heaven", reference: "Genesis 28:12" },
            { word: "canaan", hint: "Promised Land flowing with milk and honey", reference: "Genesis 17:8" },
            { word: "cyprus", hint: "Island visited by Barnabas and Paul", reference: "Acts 13:4" },
            { word: "emmaus", hint: "Village where the risen Jesus walked with two disciples", reference: "Luke 24:13" },
            { word: "goshen", hint: "Region of Egypt where Jacob's family settled", reference: "Genesis 47:6" },
            { word: "hebron", hint: "Where Abraham dwelt and David first reigned", reference: "Genesis 13:18" },
            { word: "idumea", hint: "Land of Edom, south of Judea", reference: "Mark 3:8" },
            { word: "jordan", hint: "River of Israel's crossing and Jesus' baptism", reference: "Matthew 3:13" },
            { word: "shiloh", hint: "Religious center of Israel during the Judges", reference: "1 Samuel 3:3" },
            { word: "tarsus", hint: "City in Cilicia where Paul was born", reference: "Acts 22:3" }
        ],
        animals: [
            { word: "badger", hint: "Animal whose skins covered the tabernacle", reference: "Exodus 26:14" },
            { word: "beetle", hint: "Leaping insect permitted as food (KJV, Leviticus)", reference: "Leviticus 11:22" },
            { word: "donkey", hint: "Animal Jesus rode into Jerusalem", reference: "Zechariah 9:9" },
            { word: "dragon", hint: "Fiery beast Pharaoh was likened to", reference: "Ezekiel 29:3" },
            { word: "falcon", hint: "Swift bird of prey among the unclean hawks", reference: "Leviticus 11:16" },
            { word: "hornet", hint: "Insect God sent ahead to drive out enemies", reference: "Exodus 23:28" },
            { word: "jackal", hint: "Howling scavenger haunting ruined cities", reference: "Isaiah 34:13" },
            { word: "lizard", hint: "Creeping thing considered unclean", reference: "Leviticus 11:30" },
            { word: "locust", hint: "Plague insect eaten by John the Baptist", reference: "Exodus 10:14" },
            { word: "pigeon", hint: "Bird offered by the poor instead of a lamb", reference: "Leviticus 5:7" },
            { word: "rabbit", hint: "Chews cud yet has an unsplit hoof, so unclean", reference: "Leviticus 11:6" },
            { word: "spider", hint: "Weaver of fragile webs compared to futile trust", reference: "Isaiah 59:5" },
            { word: "weasel", hint: "Small unclean rodent-like creature in Leviticus", reference: "Leviticus 11:29" }
        ],
        things: [
            { word: "basket", hint: "Container holding leftovers of feeding miracles", reference: "Matthew 14:20" },
            { word: "bronze", hint: "Metal of the altar, laver, and serpent on a pole", reference: "Numbers 21:9" },
            { word: "cymbal", hint: "Clashing instrument of Psalm 150", reference: "Psalm 150:5" },
            { word: "garlic", hint: "Egyptian food the wilderness generation missed", reference: "Numbers 11:5" },
            { word: "hammer", hint: "Tool likened to God's word breaking rock", reference: "Jeremiah 23:29" },
            { word: "helmet", hint: "Armor piece called the hope of salvation", reference: "Ephesians 6:17" },
            { word: "pillar", hint: "Column of cloud and fire that guided Israel", reference: "Exodus 13:21" },
            { word: "quiver", hint: "Arrow case; blessed is he whose is full", reference: "Psalm 127:5" },
            { word: "sandal", hint: "Footwear removed to seal a redemption deal", reference: "Ruth 4:8" },
            { word: "scroll", hint: "Rolled book Ezekiel ate and Jesus read aloud", reference: "Ezekiel 3:3" },
            { word: "shield", hint: "Protection; God promised to be Abram's", reference: "Genesis 15:1" },
            { word: "signet", hint: "Ring seal God made of Zerubbabel", reference: "Haggai 2:23" },
            { word: "silver", hint: "Metal of Judas' betrayal price", reference: "Matthew 26:15" },
            { word: "tablet", hint: "Stone slabs carrying the Ten Commandments", reference: "Exodus 31:18" },
            { word: "temple", hint: "Solomon began building it in his fourth year", reference: "1 Kings 6:1" },
            { word: "throne", hint: "Seat of royal authority, famed ivory one of Solomon", reference: "1 Kings 10:18" },
            { word: "vessel", hint: "Container believers should keep honorable", reference: "2 Timothy 2:21" }
        ],
        events: [
            { word: "battle", hint: "Armed conflict; David said its outcome belongs to the LORD", reference: "1 Samuel 17:47" },
            { word: "burial", hint: "Laying a body to rest, as Nicodemus did for Jesus", reference: "John 19:40" },
            { word: "escape", hint: "Getting clear of danger, as Lot from Sodom", reference: "Genesis 19:17" },
            { word: "exodus", hint: "Departure from Egyptian slavery", reference: "Exodus 12:41" },
            { word: "famine", hint: "Severe food shortage that drove Jacob's sons to Egypt", reference: "Genesis 42:5" },
            { word: "plague", hint: "Ten judgments sent upon Egypt", reference: "Exodus 12:29" },
            { word: "return", hint: "Remnant's homecoming decreed by Cyrus", reference: "Ezra 1:3" },
            { word: "revolt", hint: "Rebellion against authority, as Absalom's conspiracy", reference: "2 Samuel 15:6" },
            { word: "winter", hint: "Season Paul asked Timothy to arrive before", reference: "2 Timothy 4:21" }
        ],
        concepts: [
            { word: "church", hint: "Body of Christ, assembly of believers", reference: "Matthew 16:18" },
            { word: "gospel", hint: "Good news of Christ's death and resurrection", reference: "1 Corinthians 15:3" },
            { word: "martyr", hint: "Witness killed for the faith, like Stephen", reference: "Acts 7:60" },
            { word: "praise", hint: "Expression of admiration and worship", reference: "Psalm 150:6" },
            { word: "prayer", hint: "Communication with God", reference: "Matthew 6:9" },
            { word: "redeem", hint: "To buy back, as Boaz did as kinsman-redeemer", reference: "Ruth 4:4" },
            { word: "repent", hint: "Turn away from sin toward God", reference: "Acts 3:19" },
            { word: "savior", hint: "Jesus, the one who saves", reference: "Luke 2:11" },
            { word: "spirit", hint: "Holy ___ promised to guide believers into truth", reference: "John 14:26" },
            { word: "virtue", hint: "Whatever things are of this, think on these (Philippians)", reference: "Philippians 4:8" },
            { word: "wisdom", hint: "What Solomon asked for instead of riches", reference: "1 Kings 3:9" }
        ]
    },

    // ==================== 7-LETTER WORDS ====================
    7: {
        people: [
            { word: "abigail", hint: "Wise wife of Nabal, later married David", reference: "1 Samuel 25:32" },
            { word: "abraham", hint: "Father of faith, originally named Abram", reference: "Genesis 17:5" },
            { word: "absalom", hint: "Son of David who rebelled against him", reference: "2 Samuel 15:13" },
            { word: "cleopas", hint: "Disciple who met the risen Jesus on the Emmaus road", reference: "Luke 24:18" },
            { word: "deborah", hint: "Judge of Israel, wife of Lapidoth", reference: "Judges 4:4" },
            { word: "delilah", hint: "Woman who betrayed Samson for silver", reference: "Judges 16:19" },
            { word: "ezekiel", hint: "Prophet of the valley of dry bones vision", reference: "Ezekiel 37:3" },
            { word: "gabriel", hint: "Archangel who announced Jesus' birth", reference: "Luke 1:26" },
            { word: "goliath", hint: "Giant defeated by David with a sling", reference: "1 Samuel 17:49" },
            { word: "ishmael", hint: "Firstborn son of Abraham through Hagar", reference: "Genesis 16:15" },
            { word: "japheth", hint: "Son of Noah, traditionally father of Gentile nations", reference: "Genesis 9:27" },
            { word: "jezebel", hint: "Phoenician queen who promoted Baal worship", reference: "1 Kings 16:31" },
            { word: "lazarus", hint: "Brother of Mary and Martha, raised from the dead", reference: "John 11:43" },
            { word: "malachi", hint: "Last prophet in the Old Testament order", reference: "Malachi 4:5" },
            { word: "matthew", hint: "Tax collector turned gospel writer", reference: "Matthew 9:9" },
            { word: "michael", hint: "Archangel leading heaven's armies", reference: "Revelation 12:7" },
            { word: "solomon", hint: "Son of David famed for wisdom, built the temple", reference: "1 Kings 3:12" },
            { word: "stephen", hint: "First Christian martyr, stoned while forgiving", reference: "Acts 7:60" },
            { word: "timothy", hint: "Young pastor, recipient of two epistles", reference: "1 Timothy 1:2" },
            { word: "zebedee", hint: "Father of James and John, two disciples", reference: "Matthew 4:21" }
        ],
        places: [
            { word: "antioch", hint: "City where believers were first called Christians", reference: "Acts 11:26" },
            { word: "assyria", hint: "Empire that exiled the northern kingdom", reference: "2 Kings 17:6" },
            { word: "babylon", hint: "Empire that exiled Judah", reference: "Jeremiah 29:10" },
            { word: "bethany", hint: "Home of Lazarus, Martha, and Mary", reference: "John 11:18" },
            { word: "corinth", hint: "Greek city with a troublesome church", reference: "1 Corinthians 1:2" },
            { word: "ephesus", hint: "City whose church left its first love", reference: "Revelation 2:4" },
            { word: "galilee", hint: "Region foretold as seeing a great light", reference: "Matthew 4:15" },
            { word: "jericho", hint: "City whose walls fell after marching", reference: "Joshua 6:20" },
            { word: "megiddo", hint: "Fortress city beside the plain of Armageddon", reference: "Judges 5:19" },
            { word: "nineveh", hint: "Assyrian city where Jonah preached", reference: "Jonah 3:3" },
            { word: "samaria", hint: "Omri's capital; Jesus spoke there to a woman at a well", reference: "1 Kings 16:24" },
            { word: "shechem", hint: "Where Abram built his first altar in Canaan", reference: "Genesis 12:7" },
            { word: "shushan", hint: "Palace city of Esther and Nehemiah (KJV name)", reference: "Nehemiah 1:1" }
        ],
        animals: [
            { word: "chamois", hint: "Mountain goat in Deuteronomy's list of clean animals", reference: "Deuteronomy 14:5" },
            { word: "cricket", hint: "Leaping insect allowed as food under Levitical law", reference: "Leviticus 11:22" },
            { word: "gazelle", hint: "Swift graceful animal adjuring love in Song of Songs", reference: "Song of Solomon 2:7" },
            { word: "leopard", hint: "Spotted cat that cannot change its spots", reference: "Jeremiah 13:23" },
            { word: "ostrich", hint: "Flightless bird questioned by God in Job", reference: "Job 39:13" },
            { word: "peacock", hint: "Exotic bird among Solomon's imported treasures (KJV)", reference: "1 Kings 10:22" },
            { word: "serpent", hint: "Tempted Eve in the Garden of Eden", reference: "Genesis 3:1" },
            { word: "sparrow", hint: "Cheap bird God still watches over, per Matthew", reference: "Matthew 10:29" },
            { word: "swallow", hint: "Nesting bird found a home at God's altars", reference: "Psalm 84:3" },
            { word: "vulture", hint: "Carrion bird gathering where the fall is", reference: "Leviticus 11:14" }
        ],
        things: [
            { word: "chariot", hint: "Horse-drawn vehicle; Elijah rode a fiery one", reference: "2 Kings 2:11" },
            { word: "cistern", hint: "Water store; forsaking God is trading for broken ones", reference: "Jeremiah 2:13" },
            { word: "curtain", hint: "Temple veil torn top to bottom when Jesus died", reference: "Matthew 27:51" },
            { word: "furnace", hint: "Fiery oven Nebuchadnezzar heated seven times", reference: "Daniel 3:6" },
            { word: "garment", hint: "New cloth should not be sewn on an old one", reference: "Matthew 9:16" },
            { word: "incense", hint: "Aromatic smoke picturing prayers rising", reference: "Psalm 141:2" },
            { word: "lantern", hint: "Light carriers brought to arrest Jesus", reference: "John 18:3" },
            { word: "pitcher", hint: "Clay jar Gideon's men smashed holding torches", reference: "Judges 7:16" },
            { word: "sceptre", hint: "Royal rod extended to Queen Esther (KJV spelling)", reference: "Esther 4:11" },
            { word: "scourge", hint: "Whip Jesus made of cords to cleanse the temple", reference: "John 2:15" },
            { word: "timbrel", hint: "Tambourine Miriam danced with at the Red Sea", reference: "Exodus 15:20" },
            { word: "trumpet", hint: "Ram's horn blown before Jericho's fall", reference: "Joshua 6:5" }
        ],
        events: [
            { word: "baptism", hint: "Water rite Jesus received from John", reference: "Matthew 3:16" },
            { word: "harvest", hint: "Gathering season; plentiful, workers few", reference: "Matthew 9:37" },
            { word: "healing", hint: "Restoration of health, a hallmark of Jesus' ministry", reference: "Matthew 4:23" },
            { word: "journey", hint: "Travel or pilgrimage, like Mary and Joseph's", reference: "Luke 2:44" },
            { word: "jubilee", hint: "Year of liberty and land restoration every fiftieth year", reference: "Leviticus 25:10" },
            { word: "miracle", hint: "Supernatural act of God, beginning at Cana", reference: "John 2:11" },
            { word: "sabbath", hint: "Day of rest on the seventh day", reference: "Exodus 20:8" },
            { word: "victory", hint: "Triumph through Christ over sin and the grave", reference: "1 Corinthians 15:57" },
            { word: "warfare", hint: "Conflict; Paul urged Timothy to war a good one", reference: "1 Timothy 1:18" },
            { word: "wedding", hint: "Marriage feast, as at Cana of Galilee", reference: "John 2:1" }
        ],
        concepts: [
            { word: "comfort", hint: "Consolation God gives; He is its Father", reference: "2 Corinthians 1:3" },
            { word: "charity", hint: "Unconditional love, greatest virtue (1 Corinthians 13)", reference: "1 Corinthians 13:13" },
            { word: "command", hint: "Divine instruction Jesus told us to keep", reference: "John 14:15" },
            { word: "eternal", hint: "Everlasting life promised to all who believe", reference: "John 3:16" },
            { word: "forgive", hint: "To pardon someone's sins", reference: "Matthew 6:14" },
            { word: "freedom", hint: "Liberty wherewith Christ has made us free", reference: "Galatians 5:1" },
            { word: "justice", hint: "Righteous judgment; act justly, love mercy", reference: "Micah 6:8" },
            { word: "kingdom", hint: "Of God — seek it first above all else", reference: "Matthew 6:33" },
            { word: "promise", hint: "Mercy sworn to Abraham remembered by God", reference: "Luke 1:73" },
            { word: "respect", hint: "God shows none of persons, so judge fairly", reference: "Romans 2:11" },
            { word: "steward", hint: "Faithful manager of another's goods", reference: "Luke 12:42" },
            { word: "worship", hint: "Adoration of God in spirit and truth", reference: "John 4:24" }
        ]
    }
};

// Helper functions
export const getWordList = (wordLength, category) => {
    if (!BIBLE_WORDS[wordLength]) {
        return [];
    }
    // "all" pools every category for the given word length
    if (category === 'all') {
        return Object.keys(BIBLE_WORDS[wordLength]).flatMap(cat => BIBLE_WORDS[wordLength][cat]);
    }
    if (!BIBLE_WORDS[wordLength][category]) {
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
        all: "All",
        people: "People",
        places: "Places",
        animals: "Animals",
        things: "Things",
        events: "Events",
        concepts: "Concepts"
    }
};
