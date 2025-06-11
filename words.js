const words = [
  {
    "korean": "개",
    "english": "dog"
  },
  {
    "korean": "고양이",
    "english": "cat"
  },
  {
    "korean": "물고기",
    "english": "fish"
  },
  {
    "korean": "새",
    "english": "bird"
  },
  {
    "korean": "소",
    "english": "cow"
  },
  {
    "korean": "쥐",
    "english": "mouse"
  },
  {
    "korean": "말",
    "english": "horse"
  },
  {
    "korean": "날개",
    "english": "wing"
  },
  {
    "korean": "동물",
    "english": "animal"
  },
  {
    "korean": "기차",
    "english": "train"
  },
  {
    "korean": "비행기",
    "english": "airplane"
  },
  {
    "korean": "차",
    "english": "car"
  },
  {
    "korean": "트럭",
    "english": "truck"
  },
  {
    "korean": "자정거",
    "english": "bicycle"
  },
  {
    "korean": "버스",
    "english": "bus"
  },
  {
    "korean": "배",
    "english": "boat; pear; stomach"
  },
  {
    "korean": "선박",
    "english": "a commercial ship/vessel"
  },
  {
    "korean": "타이어",
    "english": "tire"
  },
  {
    "korean": "기름",
    "english": "oil; gasoline"
  },
  {
    "korean": "엔진",
    "english": "engine"
  },
  {
    "korean": "기차표",
    "english": "train ticket"
  },
  {
    "korean": "교통",
    "english": "transportation; traffic"
  },
  {
    "korean": "도시",
    "english": "city"
  },
  {
    "korean": "집",
    "english": "house"
  },
  {
    "korean": "길",
    "english": "street"
  },
  {
    "korean": "도로",
    "english": "road"
  },
  {
    "korean": "공항",
    "english": "airport"
  },
  {
    "korean": "기차역",
    "english": "train station"
  },
  {
    "korean": "다리",
    "english": "bridge; leg"
  },
  {
    "korean": "호텔",
    "english": "hotel"
  },
  {
    "korean": "식당",
    "english": "restaurant"
  },
  {
    "korean": "농장",
    "english": "farm"
  },
  {
    "korean": "재판소",
    "english": "courthouse (legal)"
  },
  {
    "korean": "학교",
    "english": "school"
  },
  {
    "korean": "사무실",
    "english": "office"
  },
  {
    "korean": "방",
    "english": "room"
  },
  {
    "korean": "마을",
    "english": "village, town"
  },
  {
    "korean": "대학교",
    "english": "university"
  },
  {
    "korean": "클럽",
    "english": "club"
  },
  {
    "korean": "술집",
    "english": "bar"
  },
  {
    "korean": "공원",
    "english": "park"
  },
  {
    "korean": "캠프",
    "english": "camp"
  },
  {
    "korean": "가게",
    "english": "store"
  },
  {
    "korean": "극장",
    "english": "theater"
  },
  {
    "korean": "도서관",
    "english": "library"
  },
  {
    "korean": "병원",
    "english": "hospital"
  },
  {
    "korean": "교회",
    "english": "church"
  },
  {
    "korean": "시장",
    "english": "market"
  },
  {
    "korean": "나라",
    "english": "country"
  },
  {
    "korean": "건물",
    "english": "building"
  },
  {
    "korean": "바닥",
    "english": "floor"
  },
  {
    "korean": "공간",
    "english": "space, room"
  },
  {
    "korean": "은행",
    "english": "bank"
  },
  {
    "korean": "위치",
    "english": "location"
  },
  {
    "korean": "모자",
    "english": "hat"
  },
  {
    "korean": "드레스",
    "english": "dress"
  },
  {
    "korean": "양복",
    "english": "suit"
  },
  {
    "korean": "치마",
    "english": "skirt"
  },
  {
    "korean": "티셔츠",
    "english": "t-shirt"
  },
  {
    "korean": "바지",
    "english": "pants"
  },
  {
    "korean": "신발",
    "english": "shoes"
  },
  {
    "korean": "주머니",
    "english": "pocket"
  },
  {
    "korean": "코트",
    "english": "coat"
  },
  {
    "korean": "얼룩",
    "english": "stain"
  },
  {
    "korean": "옷",
    "english": "clothes"
  },
  {
    "korean": "빨간색",
    "english": "red"
  },
  {
    "korean": "초록색",
    "english": "green"
  },
  {
    "korean": "파랑색",
    "english": "blue"
  },
  {
    "korean": "노랑색",
    "english": "yellow"
  },
  {
    "korean": "곤색",
    "english": "navy blue"
  },
  {
    "korean": "분홍색",
    "english": "pink"
  },
  {
    "korean": "갈색",
    "english": "brown"
  },
  {
    "korean": "오랜지색",
    "english": "orange"
  },
  {
    "korean": "검은색",
    "english": "black"
  },
  {
    "korean": "하얀색",
    "english": "white"
  },
  {
    "korean": "회색",
    "english": "gray"
  },
  {
    "korean": "색깔",
    "english": "color"
  },
  {
    "korean": "아들",
    "english": "son"
  },
  {
    "korean": "딸",
    "english": "daughter"
  },
  {
    "korean": "엄마",
    "english": "mom"
  },
  {
    "korean": "아빠",
    "english": "dad"
  },
  {
    "korean": "부모님",
    "english": "parents"
  },
  {
    "korean": "애기",
    "english": "baby"
  },
  {
    "korean": "남자",
    "english": "man"
  },
  {
    "korean": "여자",
    "english": "woman"
  },
  {
    "korean": "형",
    "english": "the older brother of a male"
  },
  {
    "korean": "누나",
    "english": "the older sister of a male"
  },
  {
    "korean": "오빠",
    "english": "the older brother of a female"
  },
  {
    "korean": "언니",
    "english": "the older sister of a female"
  },
  {
    "korean": "할아버지",
    "english": "grandfather"
  },
  {
    "korean": "할머니",
    "english": "grandmother"
  },
  {
    "korean": "남편",
    "english": "husband"
  },
  {
    "korean": "아내",
    "english": "wife"
  },
  {
    "korean": "왕",
    "english": "king"
  },
  {
    "korean": "여왕",
    "english": "queen"
  },
  {
    "korean": "대통령",
    "english": "president"
  },
  {
    "korean": "옆집 사람",
    "english": "neighbour"
  },
  {
    "korean": "여자아이",
    "english": "little girl"
  },
  {
    "korean": "남자아이",
    "english": "little boy"
  },
  {
    "korean": "성인",
    "english": "adult"
  },
  {
    "korean": "인간",
    "english": "human being"
  },
  {
    "korean": "친구",
    "english": "friend"
  },
  {
    "korean": "피해자",
    "english": "victim"
  },
  {
    "korean": "선수",
    "english": "player"
  },
  {
    "korean": "팬",
    "english": "fan"
  },
  {
    "korean": "군중",
    "english": "crowd"
  },
  {
    "korean": "사람",
    "english": "person"
  },
  {
    "korean": "선생님",
    "english": "teacher"
  },
  {
    "korean": "학생",
    "english": "student"
  },
  {
    "korean": "변호사",
    "english": "lawyer"
  },
  {
    "korean": "의사",
    "english": "doctor"
  },
  {
    "korean": "환자",
    "english": "patient"
  },
  {
    "korean": "웨이터",
    "english": "waiter"
  },
  {
    "korean": "비서",
    "english": "secretary"
  },
  {
    "korean": "신부님",
    "english": "priest"
  },
  {
    "korean": "경찰",
    "english": "police"
  },
  {
    "korean": "군대",
    "english": "army"
  },
  {
    "korean": "군인",
    "english": "soldier"
  },
  {
    "korean": "예술가",
    "english": "artist"
  },
  {
    "korean": "저자",
    "english": "author"
  },
  {
    "korean": "매니저",
    "english": "manager"
  },
  {
    "korean": "기자",
    "english": "reporter"
  },
  {
    "korean": "배우",
    "english": "actor"
  },
  {
    "korean": "직업",
    "english": "job"
  },
  {
    "korean": "종교",
    "english": "religion"
  },
  {
    "korean": "천국",
    "english": "heaven"
  },
  {
    "korean": "지옥",
    "english": "hell"
  },
  {
    "korean": "죽음",
    "english": "death"
  },
  {
    "korean": "약",
    "english": "medicine"
  },
  {
    "korean": "돈",
    "english": "money"
  },
  {
    "korean": "원",
    "english": "won (Korean currency)"
  },
  {
    "korean": "지폐",
    "english": "paper money (bill)"
  },
  {
    "korean": "결혼",
    "english": "marriage"
  },
  {
    "korean": "결혼식",
    "english": "wedding"
  },
  {
    "korean": "팀",
    "english": "team"
  },
  {
    "korean": "인종",
    "english": "ethnicity"
  },
  {
    "korean": "섹스",
    "english": "sex"
  },
  {
    "korean": "성별",
    "english": "gender"
  },
  {
    "korean": "살인",
    "english": "murder"
  },
  {
    "korean": "교도소",
    "english": "prison"
  },
  {
    "korean": "기술",
    "english": "technology"
  },
  {
    "korean": "정력",
    "english": "stamina, energy"
  },
  {
    "korean": "전쟁",
    "english": "war"
  },
  {
    "korean": "평화",
    "english": "peace"
  },
  {
    "korean": "공격",
    "english": "attack"
  },
  {
    "korean": "선거",
    "english": "election"
  },
  {
    "korean": "잡지",
    "english": "magazine"
  },
  {
    "korean": "신문",
    "english": "newspaper"
  },
  {
    "korean": "독",
    "english": "poison"
  },
  {
    "korean": "총",
    "english": "gun"
  },
  {
    "korean": "스포츠",
    "english": "sports"
  },
  {
    "korean": "경주",
    "english": "race"
  },
  {
    "korean": "운동",
    "english": "exercise, workout"
  },
  {
    "korean": "공",
    "english": "ball"
  },
  {
    "korean": "게임",
    "english": "game"
  },
  {
    "korean": "가격",
    "english": "price"
  },
  {
    "korean": "계약서",
    "english": "contract"
  },
  {
    "korean": "마약",
    "english": "drug"
  },
  {
    "korean": "간판",
    "english": "signboard"
  },
  {
    "korean": "과학",
    "english": "science"
  },
  {
    "korean": "하느님",
    "english": "god"
  },
  {
    "korean": "밴드",
    "english": "band"
  },
  {
    "korean": "노래",
    "english": "song"
  },
  {
    "korean": "악기",
    "english": "musical instrument"
  },
  {
    "korean": "음악",
    "english": "music"
  },
  {
    "korean": "영화",
    "english": "movie"
  },
  {
    "korean": "미술",
    "english": "art"
  },
  {
    "korean": "커피",
    "english": "coffee"
  },
  {
    "korean": "차",
    "english": "tea"
  },
  {
    "korean": "맥주",
    "english": "beer"
  },
  {
    "korean": "쥬스",
    "english": "juice"
  },
  {
    "korean": "물",
    "english": "water"
  },
  {
    "korean": "우유",
    "english": "milk"
  },
  {
    "korean": "음료수",
    "english": "beverage"
  },
  {
    "korean": "계란",
    "english": "egg"
  },
  {
    "korean": "치즈",
    "english": "cheese"
  },
  {
    "korean": "국물",
    "english": "soup, broth"
  },
  {
    "korean": "케이크",
    "english": "cake"
  },
  {
    "korean": "닭",
    "english": "chicken"
  },
  {
    "korean": "돼지고기",
    "english": "pork"
  },
  {
    "korean": "소고기",
    "english": "beef"
  },
  {
    "korean": "사과",
    "english": "apple"
  },
  {
    "korean": "바나나",
    "english": "banana"
  },
  {
    "korean": "오렌지",
    "english": "orange"
  },
  {
    "korean": "레몬",
    "english": "lemon"
  },
  {
    "korean": "옥수수",
    "english": "corn"
  },
  {
    "korean": "쌀",
    "english": "uncooked rice"
  },
  {
    "korean": "밥",
    "english": "rice; meal"
  },
  {
    "korean": "식용유",
    "english": "cooking oil"
  },
  {
    "korean": "씨",
    "english": "seed"
  },
  {
    "korean": "칼",
    "english": "knife"
  },
  {
    "korean": "숟가락",
    "english": "spoon"
  },
  {
    "korean": "포크",
    "english": "fork"
  },
  {
    "korean": "접시",
    "english": "plate"
  },
  {
    "korean": "컵",
    "english": "cup"
  },
  {
    "korean": "아침",
    "english": "morning; breakfast"
  },
  {
    "korean": "점심",
    "english": "lunch"
  },
  {
    "korean": "저녁",
    "english": "dinner; evening"
  },
  {
    "korean": "설탕",
    "english": "sugar"
  },
  {
    "korean": "소금",
    "english": "salt"
  },
  {
    "korean": "병",
    "english": "bottle"
  },
  {
    "korean": "음식",
    "english": "food"
  },
  {
    "korean": "책상",
    "english": "desk"
  },
  {
    "korean": "탁자",
    "english": "coffee table"
  },
  {
    "korean": "식탁",
    "english": "dining table"
  },
  {
    "korean": "의자",
    "english": "chair"
  },
  {
    "korean": "침대",
    "english": "bed"
  },
  {
    "korean": "꿈",
    "english": "dream"
  },
  {
    "korean": "창문",
    "english": "window"
  },
  {
    "korean": "문",
    "english": "door"
  },
  {
    "korean": "침실",
    "english": "bedroom"
  },
  {
    "korean": "부엌",
    "english": "kitchen"
  },
  {
    "korean": "화장실",
    "english": "bathroom"
  },
  {
    "korean": "연필",
    "english": "pencil"
  },
  {
    "korean": "볼팬",
    "english": "pen"
  },
  {
    "korean": "사진",
    "english": "photo"
  },
  {
    "korean": "비누",
    "english": "soap"
  },
  {
    "korean": "책",
    "english": "book"
  },
  {
    "korean": "페이지",
    "english": "page"
  },
  {
    "korean": "열쇠",
    "english": "key"
  },
  {
    "korean": "페인트",
    "english": "paint"
  },
  {
    "korean": "편지",
    "english": "letter"
  },
  {
    "korean": "메모",
    "english": "note"
  },
  {
    "korean": "벽",
    "english": "wall"
  },
  {
    "korean": "종이",
    "english": "paper"
  },
  {
    "korean": "천장",
    "english": "ceiling"
  },
  {
    "korean": "지붕",
    "english": "roof"
  },
  {
    "korean": "수영장",
    "english": "swimming pool"
  },
  {
    "korean": "자물쇠",
    "english": "lock"
  },
  {
    "korean": "전화기",
    "english": "phone"
  },
  {
    "korean": "정원",
    "english": "garden"
  },
  {
    "korean": "마당",
    "english": "yard"
  },
  {
    "korean": "바늘",
    "english": "needle"
  },
  {
    "korean": "가방",
    "english": "bag"
  },
  {
    "korean": "상자",
    "english": "box"
  },
  {
    "korean": "선물",
    "english": "gift, present"
  },
  {
    "korean": "카드",
    "english": "card"
  },
  {
    "korean": "반지",
    "english": "ring"
  },
  {
    "korean": "도구",
    "english": "tool"
  },
  {
    "korean": "시계",
    "english": "clock, watch"
  },
  {
    "korean": "램프",
    "english": "lamp"
  },
  {
    "korean": "휴대폰",
    "english": "cell phone"
  },
  {
    "korean": "네트워크",
    "english": "network"
  },
  {
    "korean": "컴퓨터",
    "english": "computer"
  },
  {
    "korean": "노트북",
    "english": "laptop"
  },
  {
    "korean": "화면",
    "english": "screen"
  },
  {
    "korean": "카메라",
    "english": "camera"
  },
  {
    "korean": "텔레비전",
    "english": "television"
  },
  {
    "korean": "라디오",
    "english": "radio"
  },
  {
    "korean": "머리",
    "english": "head"
  },
  {
    "korean": "목",
    "english": "neck"
  },
  {
    "korean": "얼굴",
    "english": "face"
  },
  {
    "korean": "턱수염",
    "english": "beard"
  },
  {
    "korean": "머리카락",
    "english": "hair"
  },
  {
    "korean": "눈",
    "english": "eye"
  },
  {
    "korean": "입",
    "english": "mouth"
  },
  {
    "korean": "입술",
    "english": "lips"
  },
  {
    "korean": "코",
    "english": "nose"
  },
  {
    "korean": "이빨",
    "english": "tooth"
  },
  {
    "korean": "귀",
    "english": "ear"
  },
  {
    "korean": "눈물",
    "english": "tears"
  },
  {
    "korean": "혀",
    "english": "tongue"
  },
  {
    "korean": "등",
    "english": "back"
  },
  {
    "korean": "허리",
    "english": "waist, lower back"
  },
  {
    "korean": "발가락",
    "english": "toe"
  },
  {
    "korean": "손가락",
    "english": "finger"
  },
  {
    "korean": "발",
    "english": "foot"
  },
  {
    "korean": "손",
    "english": "hand"
  },
  {
    "korean": "팔",
    "english": "arm"
  },
  {
    "korean": "어깨",
    "english": "shoulder"
  },
  {
    "korean": "심장",
    "english": "heart"
  },
  {
    "korean": "피",
    "english": "blood"
  },
  {
    "korean": "뇌",
    "english": "brain"
  },
  {
    "korean": "무릅",
    "english": "knee"
  },
  {
    "korean": "땀",
    "english": "sweat"
  },
  {
    "korean": "병",
    "english": "disease; illness"
  },
  {
    "korean": "뼈",
    "english": "bone"
  },
  {
    "korean": "목소리",
    "english": "voice"
  },
  {
    "korean": "피부",
    "english": "skin"
  },
  {
    "korean": "몸",
    "english": "body"
  },
  {
    "korean": "바다",
    "english": "sea, ocean"
  },
  {
    "korean": "강",
    "english": "river"
  },
  {
    "korean": "산",
    "english": "mountain"
  },
  {
    "korean": "비",
    "english": "rain"
  },
  {
    "korean": "눈",
    "english": "snow; eye"
  },
  {
    "korean": "달",
    "english": "moon; month"
  },
  {
    "korean": "세계",
    "english": "world"
  },
  {
    "korean": "지구",
    "english": "earth"
  },
  {
    "korean": "숲",
    "english": "forest"
  },
  {
    "korean": "하늘",
    "english": "sky"
  },
  {
    "korean": "식물",
    "english": "plant"
  },
  {
    "korean": "바람",
    "english": "wind"
  },
  {
    "korean": "토양",
    "english": "soil"
  },
  {
    "korean": "꽃",
    "english": "flower"
  },
  {
    "korean": "계곡",
    "english": "valley"
  },
  {
    "korean": "뿌리",
    "english": "root"
  },
  {
    "korean": "호수",
    "english": "lake"
  },
  {
    "korean": "별",
    "english": "star"
  },
  {
    "korean": "잔디",
    "english": "grass"
  },
  {
    "korean": "나뭇잎",
    "english": "leaf"
  },
  {
    "korean": "공기",
    "english": "air"
  },
  {
    "korean": "모래",
    "english": "sand"
  },
  {
    "korean": "해변",
    "english": "beach"
  },
  {
    "korean": "파도",
    "english": "wave"
  },
  {
    "korean": "불",
    "english": "fire"
  },
  {
    "korean": "어름",
    "english": "ice"
  },
  {
    "korean": "섬",
    "english": "island"
  },
  {
    "korean": "언덕",
    "english": "hill"
  },
  {
    "korean": "열",
    "english": "fever; heat"
  },
  {
    "korean": "자연",
    "english": "nature"
  },
  {
    "korean": "유리",
    "english": "glass"
  },
  {
    "korean": "금속",
    "english": "metal"
  },
  {
    "korean": "플라스틱",
    "english": "plastic"
  },
  {
    "korean": "나무",
    "english": "tree, wood"
  },
  {
    "korean": "돌",
    "english": "stone, pebble"
  },
  {
    "korean": "다이아몬드",
    "english": "diamond"
  },
  {
    "korean": "찰흙",
    "english": "clay"
  },
  {
    "korean": "먼지",
    "english": "dust, dirt"
  },
  {
    "korean": "금",
    "english": "gold"
  },
  {
    "korean": "구리",
    "english": "copper"
  },
  {
    "korean": "은",
    "english": "silver"
  },
  {
    "korean": "재료",
    "english": "ingredient, material"
  },
  {
    "korean": "미터",
    "english": "meter"
  },
  {
    "korean": "센티미터",
    "english": "centimeter"
  },
  {
    "korean": "킬로미터",
    "english": "kilometer"
  },
  {
    "korean": "반",
    "english": "half"
  },
  {
    "korean": "서클",
    "english": "circle"
  },
  {
    "korean": "정사각형",
    "english": "square"
  },
  {
    "korean": "온도",
    "english": "temperature"
  },
  {
    "korean": "날짜",
    "english": "date"
  },
  {
    "korean": "무게",
    "english": "weight"
  },
  {
    "korean": "가장자리",
    "english": "edge"
  },
  {
    "korean": "지도",
    "english": "map"
  },
  {
    "korean": "점",
    "english": "point"
  },
  {
    "korean": "자음",
    "english": "consonant"
  },
  {
    "korean": "모음",
    "english": "vowel"
  },
  {
    "korean": "가벼운",
    "english": "light (weight)"
  },
  {
    "korean": "소리",
    "english": "sound"
  },
  {
    "korean": "네",
    "english": "yes, I see, okay (formal)"
  },
  {
    "korean": "아니요",
    "english": "No (formal)"
  },
  {
    "korean": "조각",
    "english": "piece"
  },
  {
    "korean": "아픔",
    "english": "pain"
  },
  {
    "korean": "상처",
    "english": "wound"
  },
  {
    "korean": "구멍",
    "english": "hole"
  },
  {
    "korean": "이미지",
    "english": "image"
  },
  {
    "korean": "패턴",
    "english": "pattern"
  },
  {
    "korean": "명사",
    "english": "noun"
  },
  {
    "korean": "동사",
    "english": "verb"
  },
  {
    "korean": "형용사",
    "english": "adjective"
  },
  {
    "korean": "위에",
    "english": "above"
  },
  {
    "korean": "아래",
    "english": "under"
  },
  {
    "korean": "옆면",
    "english": "side of"
  },
  {
    "korean": "뒷면",
    "english": "back side"
  },
  {
    "korean": "안에",
    "english": "inside"
  },
  {
    "korean": "밖에",
    "english": "outside"
  },
  {
    "korean": "왼쪽",
    "english": "left side"
  },
  {
    "korean": "오른쪽",
    "english": "right side"
  },
  {
    "korean": "곧장",
    "english": "straight"
  },
  {
    "korean": "북쪽",
    "english": "north"
  },
  {
    "korean": "남쪽",
    "english": "south"
  },
  {
    "korean": "동쪽",
    "english": "east"
  },
  {
    "korean": "서쪽",
    "english": "west"
  },
  {
    "korean": "방향",
    "english": "direction"
  },
  {
    "korean": "여름",
    "english": "summer"
  },
  {
    "korean": "봄",
    "english": "spring"
  },
  {
    "korean": "겨울",
    "english": "winter"
  },
  {
    "korean": "가을",
    "english": "autumn"
  },
  {
    "korean": "계절",
    "english": "season"
  },
  {
    "korean": "공",
    "english": "zero; ball"
  },
  {
    "korean": "하나",
    "english": 1
  },
  {
    "korean": "둘",
    "english": 2
  },
  {
    "korean": "셋",
    "english": 3
  },
  {
    "korean": "넷",
    "english": 4
  },
  {
    "korean": "다섯",
    "english": 5
  },
  {
    "korean": "여섯",
    "english": 6
  },
  {
    "korean": "일곱",
    "english": 7
  },
  {
    "korean": "여덟",
    "english": 8
  },
  {
    "korean": "아홉",
    "english": 9
  },
  {
    "korean": "열",
    "english": 10
  },
  {
    "korean": "열하나",
    "english": 11
  },
  {
    "korean": "열둘",
    "english": 12
  },
  {
    "korean": "열셋",
    "english": 13
  },
  {
    "korean": "열넷",
    "english": 14
  },
  {
    "korean": "열다섯",
    "english": 15
  },
  {
    "korean": "열여섯",
    "english": 16
  },
  {
    "korean": "열일곱",
    "english": 17
  },
  {
    "korean": "열여덜",
    "english": 18
  },
  {
    "korean": "열아홉",
    "english": 19
  },
  {
    "korean": "스물",
    "english": 20
  },
  {
    "korean": "스물한",
    "english": 21
  },
  {
    "korean": "스물두",
    "english": 22
  },
  {
    "korean": "서른",
    "english": 30
  },
  {
    "korean": "서른하나",
    "english": 31
  },
  {
    "korean": "서른둘",
    "english": 32
  },
  {
    "korean": "마흔",
    "english": 40
  },
  {
    "korean": "마흔하나",
    "english": 41
  },
  {
    "korean": "마흔둘",
    "english": 42
  },
  {
    "korean": "쉰",
    "english": 50
  },
  {
    "korean": "쉰하나",
    "english": 51
  },
  {
    "korean": "쉰둘",
    "english": 52
  },
  {
    "korean": "예순",
    "english": 60
  },
  {
    "korean": "예순하나",
    "english": 61
  },
  {
    "korean": "예순둘",
    "english": 62
  },
  {
    "korean": "여든",
    "english": 80
  },
  {
    "korean": "여든하나",
    "english": 81
  },
  {
    "korean": "여든둘",
    "english": 82
  },
  {
    "korean": "아흔",
    "english": 90
  },
  {
    "korean": "아흔하나",
    "english": 91
  },
  {
    "korean": "아흔둘",
    "english": 92
  },
  {
    "korean": "백",
    "english": 100
  },
  {
    "korean": "백하나",
    "english": 101
  },
  {
    "korean": "백둘",
    "english": 102
  },
  {
    "korean": "백십",
    "english": 110
  },
  {
    "korean": "백십일",
    "english": 111
  },
  {
    "korean": "천",
    "english": 1000
  },
  {
    "korean": "천일",
    "english": 1001
  },
  {
    "korean": "만",
    "english": 10000
  },
  {
    "korean": "십만",
    "english": 100000
  },
  {
    "korean": "백만",
    "english": 1000000
  },
  {
    "korean": "천만",
    "english": 10000000
  },
  {
    "korean": "억",
    "english": 100000000
  },
  {
    "korean": "십억",
    "english": 1000000000
  },
  {
    "korean": "첫번째",
    "english": "first"
  },
  {
    "korean": "둘째",
    "english": "second"
  },
  {
    "korean": "세번째",
    "english": "third"
  },
  {
    "korean": "네번째",
    "english": "fourth"
  },
  {
    "korean": "다섯번째",
    "english": "fifth"
  },
  {
    "korean": "번호",
    "english": "number"
  },
  {
    "korean": "일월",
    "english": "January"
  },
  {
    "korean": "이월",
    "english": "February"
  },
  {
    "korean": "삼월",
    "english": "March"
  },
  {
    "korean": "사월",
    "english": "April"
  },
  {
    "korean": "오월",
    "english": "May"
  },
  {
    "korean": "유월",
    "english": "June"
  },
  {
    "korean": "칠월",
    "english": "July"
  },
  {
    "korean": "팔월",
    "english": "August"
  },
  {
    "korean": "구월",
    "english": "September"
  },
  {
    "korean": "시월",
    "english": "October"
  },
  {
    "korean": "십일월",
    "english": "November"
  },
  {
    "korean": "십이월",
    "english": "December"
  },
  {
    "korean": "월요일",
    "english": "Monday"
  },
  {
    "korean": "화요일",
    "english": "Tuesday"
  },
  {
    "korean": "수요일",
    "english": "Wednesday"
  },
  {
    "korean": "목요일",
    "english": "Thursday"
  },
  {
    "korean": "금요일",
    "english": "Friday"
  },
  {
    "korean": "토요일",
    "english": "Saturday"
  },
  {
    "korean": "일요일",
    "english": "Sunday"
  },
  {
    "korean": "년",
    "english": "year (counter)"
  },
  {
    "korean": "달",
    "english": "month (counter)"
  },
  {
    "korean": "시간",
    "english": "hour (duration); time"
  },
  {
    "korean": "분",
    "english": "minute; person (honorific)"
  },
  {
    "korean": "밤",
    "english": "night"
  },
  {
    "korean": "일하다",
    "english": "to work"
  },
  {
    "korean": "놀다",
    "english": "to play"
  },
  {
    "korean": "걷다",
    "english": "to walk"
  },
  {
    "korean": "뛰다",
    "english": "to run"
  },
  {
    "korean": "운전하다",
    "english": "to drive"
  },
  {
    "korean": "날다",
    "english": "to fly"
  },
  {
    "korean": "수영하다",
    "english": "to swim"
  },
  {
    "korean": "가다",
    "english": "to go"
  },
  {
    "korean": "멈추다",
    "english": "to stop"
  },
  {
    "korean": "따르다",
    "english": "to follow"
  },
  {
    "korean": "생각하다",
    "english": "to think"
  },
  {
    "korean": "말하다",
    "english": "to speak"
  },
  {
    "korean": "먹다",
    "english": "to eat"
  },
  {
    "korean": "마시다",
    "english": "to drink"
  },
  {
    "korean": "죽이다",
    "english": "to kill"
  },
  {
    "korean": "죽다",
    "english": "to die"
  },
  {
    "korean": "웃다",
    "english": "to laugh, smile"
  },
  {
    "korean": "울다",
    "english": "to cry"
  },
  {
    "korean": "사다",
    "english": "to buy"
  },
  {
    "korean": "지불하다",
    "english": "to pay"
  },
  {
    "korean": "팔다",
    "english": "to sell"
  },
  {
    "korean": "쏘다",
    "english": "to shoot"
  },
  {
    "korean": "배우다",
    "english": "to learn"
  },
  {
    "korean": "점프하다",
    "english": "to jump"
  },
  {
    "korean": "냄새를 맡다",
    "english": "to smell something"
  },
  {
    "korean": "듣다",
    "english": "to listen, hear"
  },
  {
    "korean": "맛보다",
    "english": "to taste"
  },
  {
    "korean": "보다",
    "english": "to see"
  },
  {
    "korean": "만지다",
    "english": "to touch"
  },
  {
    "korean": "뽀뽀하다",
    "english": "to kiss"
  },
  {
    "korean": "불타다",
    "english": "to burn"
  },
  {
    "korean": "녹다",
    "english": "to melt"
  },
  {
    "korean": "파다",
    "english": "to dig"
  },
  {
    "korean": "폭발하다",
    "english": "to explode"
  },
  {
    "korean": "앉다",
    "english": "to sit"
  },
  {
    "korean": "서다",
    "english": "to stand"
  },
  {
    "korean": "사랑하다",
    "english": "to love"
  },
  {
    "korean": "지나가다",
    "english": "to pass by"
  },
  {
    "korean": "자르다",
    "english": "to cut (hair/trees/papers...)"
  },
  {
    "korean": "싸우다",
    "english": "to fight"
  },
  {
    "korean": "눕다",
    "english": "to lie down"
  },
  {
    "korean": "춤추다",
    "english": "to dance"
  },
  {
    "korean": "자다",
    "english": "to sleep"
  },
  {
    "korean": "깨다",
    "english": "to wake up"
  },
  {
    "korean": "노래하다",
    "english": "to sing"
  },
  {
    "korean": "세다",
    "english": "to count"
  },
  {
    "korean": "결혼하다",
    "english": "to marry"
  },
  {
    "korean": "기도하다",
    "english": "to pray"
  },
  {
    "korean": "이기다",
    "english": "to win"
  },
  {
    "korean": "지다",
    "english": "to lose"
  },
  {
    "korean": "섞다",
    "english": "to mix"
  },
  {
    "korean": "구부리다",
    "english": "to bend"
  },
  {
    "korean": "씻다",
    "english": "to wash"
  },
  {
    "korean": "요리하다",
    "english": "to cook"
  },
  {
    "korean": "열다",
    "english": "to open"
  },
  {
    "korean": "닫다",
    "english": "to close"
  },
  {
    "korean": "쓰다",
    "english": "to write"
  },
  {
    "korean": "부르다",
    "english": "to call"
  },
  {
    "korean": "돌다",
    "english": "to turn"
  },
  {
    "korean": "건설하다",
    "english": "To construct or erect"
  },
  {
    "korean": "가르치다",
    "english": "to teach"
  },
  {
    "korean": "자라다",
    "english": "to grow up"
  },
  {
    "korean": "그리다",
    "english": "to draw"
  },
  {
    "korean": "먹이다",
    "english": "to feed"
  },
  {
    "korean": "잡다",
    "english": "to catch"
  },
  {
    "korean": "던지다",
    "english": "to throw"
  },
  {
    "korean": "청소하다",
    "english": "to clean"
  },
  {
    "korean": "찾다",
    "english": "to find, look for"
  },
  {
    "korean": "넘어지다",
    "english": "to fall down"
  },
  {
    "korean": "밀다",
    "english": "to push"
  },
  {
    "korean": "당기다",
    "english": "pull"
  },
  {
    "korean": "들다",
    "english": "to cost; carry"
  },
  {
    "korean": "망가지다",
    "english": "to break down"
  },
  {
    "korean": "깨지다",
    "english": "to break"
  },
  {
    "korean": "입다",
    "english": "to wear"
  },
  {
    "korean": "흔들다",
    "english": "to shake"
  },
  {
    "korean": "서명하다",
    "english": "to sign (signature)"
  },
  {
    "korean": "패다",
    "english": "To beat, to bash"
  },
  {
    "korean": "들어올리다",
    "english": "to lift"
  },
  {
    "korean": "길다",
    "english": "to be long"
  },
  {
    "korean": "짧다",
    "english": "to be short"
  },
  {
    "korean": "키가 크다",
    "english": "to be tall (height)"
  },
  {
    "korean": "키가 작다",
    "english": "to be short (short)"
  },
  {
    "korean": "넓다",
    "english": "to be wide"
  },
  {
    "korean": "크다",
    "english": "to be big"
  },
  {
    "korean": "작다",
    "english": "to be small"
  },
  {
    "korean": "느리다",
    "english": "to be slow"
  },
  {
    "korean": "빠르다",
    "english": "to be fast"
  },
  {
    "korean": "뜨겁다",
    "english": "to be hot"
  },
  {
    "korean": "차겁다",
    "english": "to be cold"
  },
  {
    "korean": "따뜻하다",
    "english": "to be warm"
  },
  {
    "korean": "선선하다",
    "english": "to be cool"
  },
  {
    "korean": "새롭다",
    "english": "to be new"
  },
  {
    "korean": "오래되다",
    "english": "to be old (for inanimate objects)"
  },
  {
    "korean": "젊다",
    "english": "To be young,youthful"
  },
  {
    "korean": "늙다",
    "english": "to be old (person)"
  },
  {
    "korean": "좋다",
    "english": "to be good"
  },
  {
    "korean": "나쁘다",
    "english": "to be bad"
  },
  {
    "korean": "젖다",
    "english": "to be wet, damp"
  },
  {
    "korean": "건조하다",
    "english": "to be dry"
  },
  {
    "korean": "아프다",
    "english": "to be sick, hurt"
  },
  {
    "korean": "건강하다",
    "english": "to be healthy"
  },
  {
    "korean": "시끄럽다",
    "english": "to be noisy, loud"
  },
  {
    "korean": "조용하다",
    "english": "to be quiet"
  },
  {
    "korean": "행복하다",
    "english": "to be happy"
  },
  {
    "korean": "슬프다",
    "english": "to be sad"
  },
  {
    "korean": "아름답다",
    "english": "to be beautiful"
  },
  {
    "korean": "못생기다",
    "english": "to be ugly"
  },
  {
    "korean": "귀머거리",
    "english": "deaf person"
  },
  {
    "korean": "맹인",
    "english": "blind person"
  },
  {
    "korean": "착하다",
    "english": "to be nice, kind"
  },
  {
    "korean": "가난하다",
    "english": "to be poor"
  },
  {
    "korean": "부유하다",
    "english": "to be wealthy"
  },
  {
    "korean": "두껍다",
    "english": "to be thick"
  },
  {
    "korean": "얇다",
    "english": "to be thin"
  },
  {
    "korean": "비싸다",
    "english": "to be expensive"
  },
  {
    "korean": "싸다",
    "english": "to be cheap"
  },
  {
    "korean": "평탄하다",
    "english": "to be smooth, flat"
  },
  {
    "korean": "구부러지다",
    "english": "to be bent"
  },
  {
    "korean": "끼다",
    "english": "To put on or wear, to wear (a ring)"
  },
  {
    "korean": "헐렁하다",
    "english": "to be loose, baggy"
  },
  {
    "korean": "놉다",
    "english": "to be high"
  },
  {
    "korean": "낮다",
    "english": "to be low"
  },
  {
    "korean": "딱딱하다",
    "english": "to be hard"
  },
  {
    "korean": "부드럽다",
    "english": "to be soft"
  },
  {
    "korean": "깊다",
    "english": "to be deep"
  },
  {
    "korean": "얕다",
    "english": "to be shallow"
  },
  {
    "korean": "깨끗하다",
    "english": "to be clean"
  },
  {
    "korean": "더럽다",
    "english": "to be dirty"
  },
  {
    "korean": "힘이 세다",
    "english": "to be strong"
  },
  {
    "korean": "약하다",
    "english": "to be weak"
  },
  {
    "korean": "살다",
    "english": "to live"
  },
  {
    "korean": "무겁다",
    "english": "to be heavy"
  },
  {
    "korean": "가볍다",
    "english": "to be light"
  },
  {
    "korean": "어둡다",
    "english": "to be dark"
  },
  {
    "korean": "밝다",
    "english": "to be bright"
  },
  {
    "korean": "인기가 많다",
    "english": "to be popular"
  },
  {
    "korean": "저",
    "english": "I, me (formal); that"
  },
  {
    "korean": "나",
    "english": "I, me (informal)"
  },
  {
    "korean": "그",
    "english": "that, he, she, it"
  },
  {
    "korean": "우리",
    "english": "we, our"
  },
  {
    "korean": "상대방",
    "english": "Other party, counterpart"
  },
  {
    "korean": "저의",
    "english": "my (formal)"
  },
  {
    "korean": "내",
    "english": "my (informal)"
  },
  {
    "korean": "당신",
    "english": "you (formal)"
  },
  {
    "korean": "내가",
    "english": "I (as subject)"
  },
  {
    "korean": "네가",
    "english": "you"
  },
  {
    "korean": "너희들",
    "english": "you (plural)/ (all of) you"
  }
];