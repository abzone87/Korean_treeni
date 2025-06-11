const words = [
  {
    "korean": "개",
    "english": "dog",
    "group": "Group 1"
  },
  {
    "korean": "고양이",
    "english": "cat",
    "group": "Group 1"
  },
  {
    "korean": "물고기",
    "english": "fish",
    "group": "Group 1"
  },
  {
    "korean": "새",
    "english": "bird",
    "group": "Group 1"
  },
  {
    "korean": "소",
    "english": "cow",
    "group": "Group 1"
  },
  {
    "korean": "쥐",
    "english": "mouse",
    "group": "Group 1"
  },
  {
    "korean": "말",
    "english": "horse",
    "group": "Group 1"
  },
  {
    "korean": "날개",
    "english": "wing",
    "group": "Group 1"
  },
  {
    "korean": "동물",
    "english": "animal",
    "group": "Group 1"
  },
  {
    "korean": "기차",
    "english": "train",
    "group": "Group 1"
  },
  {
    "korean": "비행기",
    "english": "airplane",
    "group": "Group 1"
  },
  {
    "korean": "차",
    "english": "car",
    "group": "Group 1"
  },
  {
    "korean": "트럭",
    "english": "truck",
    "group": "Group 1"
  },
  {
    "korean": "자정거",
    "english": "bicycle",
    "group": "Group 1"
  },
  {
    "korean": "버스",
    "english": "bus",
    "group": "Group 1"
  },
  {
    "korean": "배",
    "english": "boat; pear; stomach",
    "group": "Group 1"
  },
  {
    "korean": "선박",
    "english": "a commercial ship/vessel",
    "group": "Group 1"
  },
  {
    "korean": "타이어",
    "english": "tire",
    "group": "Group 1"
  },
  {
    "korean": "기름",
    "english": "oil; gasoline",
    "group": "Group 1"
  },
  {
    "korean": "엔진",
    "english": "engine",
    "group": "Group 1"
  },
  {
    "korean": "기차표",
    "english": "train ticket",
    "group": "Group 1"
  },
  {
    "korean": "교통",
    "english": "transportation; traffic",
    "group": "Group 1"
  },
  {
    "korean": "도시",
    "english": "city",
    "group": "Group 1"
  },
  {
    "korean": "집",
    "english": "house",
    "group": "Group 1"
  },
  {
    "korean": "길",
    "english": "street",
    "group": "Group 1"
  },
  {
    "korean": "도로",
    "english": "road",
    "group": "Group 1"
  },
  {
    "korean": "공항",
    "english": "airport",
    "group": "Group 1"
  },
  {
    "korean": "기차역",
    "english": "train station",
    "group": "Group 1"
  },
  {
    "korean": "다리",
    "english": "bridge; leg",
    "group": "Group 1"
  },
  {
    "korean": "호텔",
    "english": "hotel",
    "group": "Group 1"
  },
  {
    "korean": "식당",
    "english": "restaurant",
    "group": "Group 2"
  },
  {
    "korean": "농장",
    "english": "farm",
    "group": "Group 2"
  },
  {
    "korean": "재판소",
    "english": "courthouse (legal)",
    "group": "Group 2"
  },
  {
    "korean": "학교",
    "english": "school",
    "group": "Group 2"
  },
  {
    "korean": "사무실",
    "english": "office",
    "group": "Group 2"
  },
  {
    "korean": "방",
    "english": "room",
    "group": "Group 2"
  },
  {
    "korean": "마을",
    "english": "village, town",
    "group": "Group 2"
  },
  {
    "korean": "대학교",
    "english": "university",
    "group": "Group 2"
  },
  {
    "korean": "클럽",
    "english": "club",
    "group": "Group 2"
  },
  {
    "korean": "술집",
    "english": "bar",
    "group": "Group 2"
  },
  {
    "korean": "공원",
    "english": "park",
    "group": "Group 2"
  },
  {
    "korean": "캠프",
    "english": "camp",
    "group": "Group 2"
  },
  {
    "korean": "가게",
    "english": "store",
    "group": "Group 2"
  },
  {
    "korean": "극장",
    "english": "theater",
    "group": "Group 2"
  },
  {
    "korean": "도서관",
    "english": "library",
    "group": "Group 2"
  },
  {
    "korean": "병원",
    "english": "hospital",
    "group": "Group 2"
  },
  {
    "korean": "교회",
    "english": "church",
    "group": "Group 2"
  },
  {
    "korean": "시장",
    "english": "market",
    "group": "Group 2"
  },
  {
    "korean": "나라",
    "english": "country",
    "group": "Group 2"
  },
  {
    "korean": "건물",
    "english": "building",
    "group": "Group 2"
  },
  {
    "korean": "바닥",
    "english": "floor",
    "group": "Group 2"
  },
  {
    "korean": "공간",
    "english": "space, room",
    "group": "Group 2"
  },
  {
    "korean": "은행",
    "english": "bank",
    "group": "Group 2"
  },
  {
    "korean": "위치",
    "english": "location",
    "group": "Group 2"
  },
  {
    "korean": "모자",
    "english": "hat",
    "group": "Group 2"
  },
  {
    "korean": "드레스",
    "english": "dress",
    "group": "Group 2"
  },
  {
    "korean": "양복",
    "english": "suit",
    "group": "Group 2"
  },
  {
    "korean": "치마",
    "english": "skirt",
    "group": "Group 2"
  },
  {
    "korean": "티셔츠",
    "english": "t-shirt",
    "group": "Group 2"
  },
  {
    "korean": "바지",
    "english": "pants",
    "group": "Group 2"
  },
  {
    "korean": "신발",
    "english": "shoes",
    "group": "Group 3"
  },
  {
    "korean": "주머니",
    "english": "pocket",
    "group": "Group 3"
  },
  {
    "korean": "코트",
    "english": "coat",
    "group": "Group 3"
  },
  {
    "korean": "얼룩",
    "english": "stain",
    "group": "Group 3"
  },
  {
    "korean": "옷",
    "english": "clothes",
    "group": "Group 3"
  },
  {
    "korean": "빨간색",
    "english": "red",
    "group": "Group 3"
  },
  {
    "korean": "초록색",
    "english": "green",
    "group": "Group 3"
  },
  {
    "korean": "파랑색",
    "english": "blue",
    "group": "Group 3"
  },
  {
    "korean": "노랑색",
    "english": "yellow",
    "group": "Group 3"
  },
  {
    "korean": "곤색",
    "english": "navy blue",
    "group": "Group 3"
  },
  {
    "korean": "분홍색",
    "english": "pink",
    "group": "Group 3"
  },
  {
    "korean": "갈색",
    "english": "brown",
    "group": "Group 3"
  },
  {
    "korean": "오랜지색",
    "english": "orange",
    "group": "Group 3"
  },
  {
    "korean": "검은색",
    "english": "black",
    "group": "Group 3"
  },
  {
    "korean": "하얀색",
    "english": "white",
    "group": "Group 3"
  },
  {
    "korean": "회색",
    "english": "gray",
    "group": "Group 3"
  },
  {
    "korean": "색깔",
    "english": "color",
    "group": "Group 3"
  },
  {
    "korean": "아들",
    "english": "son",
    "group": "Group 3"
  },
  {
    "korean": "딸",
    "english": "daughter",
    "group": "Group 3"
  },
  {
    "korean": "엄마",
    "english": "mom",
    "group": "Group 3"
  },
  {
    "korean": "아빠",
    "english": "dad",
    "group": "Group 3"
  },
  {
    "korean": "부모님",
    "english": "parents",
    "group": "Group 3"
  },
  {
    "korean": "애기",
    "english": "baby",
    "group": "Group 3"
  },
  {
    "korean": "남자",
    "english": "man",
    "group": "Group 3"
  },
  {
    "korean": "여자",
    "english": "woman",
    "group": "Group 3"
  },
  {
    "korean": "형",
    "english": "the older brother of a male",
    "group": "Group 3"
  },
  {
    "korean": "누나",
    "english": "the older sister of a male",
    "group": "Group 3"
  },
  {
    "korean": "오빠",
    "english": "the older brother of a female",
    "group": "Group 3"
  },
  {
    "korean": "언니",
    "english": "the older sister of a female",
    "group": "Group 3"
  },
  {
    "korean": "할아버지",
    "english": "grandfather",
    "group": "Group 3"
  },
  {
    "korean": "할머니",
    "english": "grandmother",
    "group": "Group 4"
  },
  {
    "korean": "남편",
    "english": "husband",
    "group": "Group 4"
  },
  {
    "korean": "아내",
    "english": "wife",
    "group": "Group 4"
  },
  {
    "korean": "왕",
    "english": "king",
    "group": "Group 4"
  },
  {
    "korean": "여왕",
    "english": "queen",
    "group": "Group 4"
  },
  {
    "korean": "대통령",
    "english": "president",
    "group": "Group 4"
  },
  {
    "korean": "옆집 사람",
    "english": "neighbour",
    "group": "Group 4"
  },
  {
    "korean": "여자아이",
    "english": "little girl",
    "group": "Group 4"
  },
  {
    "korean": "남자아이",
    "english": "little boy",
    "group": "Group 4"
  },
  {
    "korean": "성인",
    "english": "adult",
    "group": "Group 4"
  },
  {
    "korean": "인간",
    "english": "human being",
    "group": "Group 4"
  },
  {
    "korean": "친구",
    "english": "friend",
    "group": "Group 4"
  },
  {
    "korean": "피해자",
    "english": "victim",
    "group": "Group 4"
  },
  {
    "korean": "선수",
    "english": "player",
    "group": "Group 4"
  },
  {
    "korean": "팬",
    "english": "fan",
    "group": "Group 4"
  },
  {
    "korean": "군중",
    "english": "crowd",
    "group": "Group 4"
  },
  {
    "korean": "사람",
    "english": "person",
    "group": "Group 4"
  },
  {
    "korean": "선생님",
    "english": "teacher",
    "group": "Group 4"
  },
  {
    "korean": "학생",
    "english": "student",
    "group": "Group 4"
  },
  {
    "korean": "변호사",
    "english": "lawyer",
    "group": "Group 4"
  },
  {
    "korean": "의사",
    "english": "doctor",
    "group": "Group 4"
  },
  {
    "korean": "환자",
    "english": "patient",
    "group": "Group 4"
  },
  {
    "korean": "웨이터",
    "english": "waiter",
    "group": "Group 4"
  },
  {
    "korean": "비서",
    "english": "secretary",
    "group": "Group 4"
  },
  {
    "korean": "신부님",
    "english": "priest",
    "group": "Group 4"
  },
  {
    "korean": "경찰",
    "english": "police",
    "group": "Group 4"
  },
  {
    "korean": "군대",
    "english": "army",
    "group": "Group 4"
  },
  {
    "korean": "군인",
    "english": "soldier",
    "group": "Group 4"
  },
  {
    "korean": "예술가",
    "english": "artist",
    "group": "Group 4"
  },
  {
    "korean": "저자",
    "english": "author",
    "group": "Group 4"
  },
  {
    "korean": "매니저",
    "english": "manager",
    "group": "Group 5"
  },
  {
    "korean": "기자",
    "english": "reporter",
    "group": "Group 5"
  },
  {
    "korean": "배우",
    "english": "actor",
    "group": "Group 5"
  },
  {
    "korean": "직업",
    "english": "job",
    "group": "Group 5"
  },
  {
    "korean": "종교",
    "english": "religion",
    "group": "Group 5"
  },
  {
    "korean": "천국",
    "english": "heaven",
    "group": "Group 5"
  },
  {
    "korean": "지옥",
    "english": "hell",
    "group": "Group 5"
  },
  {
    "korean": "죽음",
    "english": "death",
    "group": "Group 5"
  },
  {
    "korean": "약",
    "english": "medicine",
    "group": "Group 5"
  },
  {
    "korean": "돈",
    "english": "money",
    "group": "Group 5"
  },
  {
    "korean": "원",
    "english": "won (Korean currency)",
    "group": "Group 5"
  },
  {
    "korean": "지폐",
    "english": "paper money (bill)",
    "group": "Group 5"
  },
  {
    "korean": "결혼",
    "english": "marriage",
    "group": "Group 5"
  },
  {
    "korean": "결혼식",
    "english": "wedding",
    "group": "Group 5"
  },
  {
    "korean": "팀",
    "english": "team",
    "group": "Group 5"
  },
  {
    "korean": "인종",
    "english": "ethnicity",
    "group": "Group 5"
  },
  {
    "korean": "섹스",
    "english": "sex",
    "group": "Group 5"
  },
  {
    "korean": "성별",
    "english": "gender",
    "group": "Group 5"
  },
  {
    "korean": "살인",
    "english": "murder",
    "group": "Group 5"
  },
  {
    "korean": "교도소",
    "english": "prison",
    "group": "Group 5"
  },
  {
    "korean": "기술",
    "english": "technology",
    "group": "Group 5"
  },
  {
    "korean": "정력",
    "english": "stamina, energy",
    "group": "Group 5"
  },
  {
    "korean": "전쟁",
    "english": "war",
    "group": "Group 5"
  },
  {
    "korean": "평화",
    "english": "peace",
    "group": "Group 5"
  },
  {
    "korean": "공격",
    "english": "attack",
    "group": "Group 5"
  },
  {
    "korean": "선거",
    "english": "election",
    "group": "Group 5"
  },
  {
    "korean": "잡지",
    "english": "magazine",
    "group": "Group 5"
  },
  {
    "korean": "신문",
    "english": "newspaper",
    "group": "Group 5"
  },
  {
    "korean": "독",
    "english": "poison",
    "group": "Group 5"
  },
  {
    "korean": "총",
    "english": "gun",
    "group": "Group 5"
  },
  {
    "korean": "스포츠",
    "english": "sports",
    "group": "Group 6"
  },
  {
    "korean": "경주",
    "english": "race",
    "group": "Group 6"
  },
  {
    "korean": "운동",
    "english": "exercise, workout",
    "group": "Group 6"
  },
  {
    "korean": "공",
    "english": "ball",
    "group": "Group 6"
  },
  {
    "korean": "게임",
    "english": "game",
    "group": "Group 6"
  },
  {
    "korean": "가격",
    "english": "price",
    "group": "Group 6"
  },
  {
    "korean": "계약서",
    "english": "contract",
    "group": "Group 6"
  },
  {
    "korean": "마약",
    "english": "drug",
    "group": "Group 6"
  },
  {
    "korean": "간판",
    "english": "signboard",
    "group": "Group 6"
  },
  {
    "korean": "과학",
    "english": "science",
    "group": "Group 6"
  },
  {
    "korean": "하느님",
    "english": "god",
    "group": "Group 6"
  },
  {
    "korean": "밴드",
    "english": "band",
    "group": "Group 6"
  },
  {
    "korean": "노래",
    "english": "song",
    "group": "Group 6"
  },
  {
    "korean": "악기",
    "english": "musical instrument",
    "group": "Group 6"
  },
  {
    "korean": "음악",
    "english": "music",
    "group": "Group 6"
  },
  {
    "korean": "영화",
    "english": "movie",
    "group": "Group 6"
  },
  {
    "korean": "미술",
    "english": "art",
    "group": "Group 6"
  },
  {
    "korean": "커피",
    "english": "coffee",
    "group": "Group 6"
  },
  {
    "korean": "차",
    "english": "tea",
    "group": "Group 6"
  },
  {
    "korean": "맥주",
    "english": "beer",
    "group": "Group 6"
  },
  {
    "korean": "쥬스",
    "english": "juice",
    "group": "Group 6"
  },
  {
    "korean": "물",
    "english": "water",
    "group": "Group 6"
  },
  {
    "korean": "우유",
    "english": "milk",
    "group": "Group 6"
  },
  {
    "korean": "음료수",
    "english": "beverage",
    "group": "Group 6"
  },
  {
    "korean": "계란",
    "english": "egg",
    "group": "Group 6"
  },
  {
    "korean": "치즈",
    "english": "cheese",
    "group": "Group 6"
  },
  {
    "korean": "국물",
    "english": "soup, broth",
    "group": "Group 6"
  },
  {
    "korean": "케이크",
    "english": "cake",
    "group": "Group 6"
  },
  {
    "korean": "닭",
    "english": "chicken",
    "group": "Group 6"
  },
  {
    "korean": "돼지고기",
    "english": "pork",
    "group": "Group 6"
  },
  {
    "korean": "소고기",
    "english": "beef",
    "group": "Group 7"
  },
  {
    "korean": "사과",
    "english": "apple",
    "group": "Group 7"
  },
  {
    "korean": "바나나",
    "english": "banana",
    "group": "Group 7"
  },
  {
    "korean": "오렌지",
    "english": "orange",
    "group": "Group 7"
  },
  {
    "korean": "레몬",
    "english": "lemon",
    "group": "Group 7"
  },
  {
    "korean": "옥수수",
    "english": "corn",
    "group": "Group 7"
  },
  {
    "korean": "쌀",
    "english": "uncooked rice",
    "group": "Group 7"
  },
  {
    "korean": "밥",
    "english": "rice; meal",
    "group": "Group 7"
  },
  {
    "korean": "식용유",
    "english": "cooking oil",
    "group": "Group 7"
  },
  {
    "korean": "씨",
    "english": "seed",
    "group": "Group 7"
  },
  {
    "korean": "칼",
    "english": "knife",
    "group": "Group 7"
  },
  {
    "korean": "숟가락",
    "english": "spoon",
    "group": "Group 7"
  },
  {
    "korean": "포크",
    "english": "fork",
    "group": "Group 7"
  },
  {
    "korean": "접시",
    "english": "plate",
    "group": "Group 7"
  },
  {
    "korean": "컵",
    "english": "cup",
    "group": "Group 7"
  },
  {
    "korean": "아침",
    "english": "morning; breakfast",
    "group": "Group 7"
  },
  {
    "korean": "점심",
    "english": "lunch",
    "group": "Group 7"
  },
  {
    "korean": "저녁",
    "english": "dinner; evening",
    "group": "Group 7"
  },
  {
    "korean": "설탕",
    "english": "sugar",
    "group": "Group 7"
  },
  {
    "korean": "소금",
    "english": "salt",
    "group": "Group 7"
  },
  {
    "korean": "병",
    "english": "bottle",
    "group": "Group 7"
  },
  {
    "korean": "음식",
    "english": "food",
    "group": "Group 7"
  },
  {
    "korean": "책상",
    "english": "desk",
    "group": "Group 7"
  },
  {
    "korean": "탁자",
    "english": "coffee table",
    "group": "Group 7"
  },
  {
    "korean": "식탁",
    "english": "dining table",
    "group": "Group 7"
  },
  {
    "korean": "의자",
    "english": "chair",
    "group": "Group 7"
  },
  {
    "korean": "침대",
    "english": "bed",
    "group": "Group 7"
  },
  {
    "korean": "꿈",
    "english": "dream",
    "group": "Group 7"
  },
  {
    "korean": "창문",
    "english": "window",
    "group": "Group 7"
  },
  {
    "korean": "문",
    "english": "door",
    "group": "Group 7"
  },
  {
    "korean": "침실",
    "english": "bedroom",
    "group": "Group 8"
  },
  {
    "korean": "부엌",
    "english": "kitchen",
    "group": "Group 8"
  },
  {
    "korean": "화장실",
    "english": "bathroom",
    "group": "Group 8"
  },
  {
    "korean": "연필",
    "english": "pencil",
    "group": "Group 8"
  },
  {
    "korean": "볼팬",
    "english": "pen",
    "group": "Group 8"
  },
  {
    "korean": "사진",
    "english": "photo",
    "group": "Group 8"
  },
  {
    "korean": "비누",
    "english": "soap",
    "group": "Group 8"
  },
  {
    "korean": "책",
    "english": "book",
    "group": "Group 8"
  },
  {
    "korean": "페이지",
    "english": "page",
    "group": "Group 8"
  },
  {
    "korean": "열쇠",
    "english": "key",
    "group": "Group 8"
  },
  {
    "korean": "페인트",
    "english": "paint",
    "group": "Group 8"
  },
  {
    "korean": "편지",
    "english": "letter",
    "group": "Group 8"
  },
  {
    "korean": "메모",
    "english": "note",
    "group": "Group 8"
  },
  {
    "korean": "벽",
    "english": "wall",
    "group": "Group 8"
  },
  {
    "korean": "종이",
    "english": "paper",
    "group": "Group 8"
  },
  {
    "korean": "천장",
    "english": "ceiling",
    "group": "Group 8"
  },
  {
    "korean": "지붕",
    "english": "roof",
    "group": "Group 8"
  },
  {
    "korean": "수영장",
    "english": "swimming pool",
    "group": "Group 8"
  },
  {
    "korean": "자물쇠",
    "english": "lock",
    "group": "Group 8"
  },
  {
    "korean": "전화기",
    "english": "phone",
    "group": "Group 8"
  },
  {
    "korean": "정원",
    "english": "garden",
    "group": "Group 8"
  },
  {
    "korean": "마당",
    "english": "yard",
    "group": "Group 8"
  },
  {
    "korean": "바늘",
    "english": "needle",
    "group": "Group 8"
  },
  {
    "korean": "가방",
    "english": "bag",
    "group": "Group 8"
  },
  {
    "korean": "상자",
    "english": "box",
    "group": "Group 8"
  },
  {
    "korean": "선물",
    "english": "gift, present",
    "group": "Group 8"
  },
  {
    "korean": "카드",
    "english": "card",
    "group": "Group 8"
  },
  {
    "korean": "반지",
    "english": "ring",
    "group": "Group 8"
  },
  {
    "korean": "도구",
    "english": "tool",
    "group": "Group 8"
  },
  {
    "korean": "시계",
    "english": "clock, watch",
    "group": "Group 8"
  },
  {
    "korean": "램프",
    "english": "lamp",
    "group": "Group 9"
  },
  {
    "korean": "휴대폰",
    "english": "cell phone",
    "group": "Group 9"
  },
  {
    "korean": "네트워크",
    "english": "network",
    "group": "Group 9"
  },
  {
    "korean": "컴퓨터",
    "english": "computer",
    "group": "Group 9"
  },
  {
    "korean": "노트북",
    "english": "laptop",
    "group": "Group 9"
  },
  {
    "korean": "화면",
    "english": "screen",
    "group": "Group 9"
  },
  {
    "korean": "카메라",
    "english": "camera",
    "group": "Group 9"
  },
  {
    "korean": "텔레비전",
    "english": "television",
    "group": "Group 9"
  },
  {
    "korean": "라디오",
    "english": "radio",
    "group": "Group 9"
  },
  {
    "korean": "머리",
    "english": "head",
    "group": "Group 9"
  },
  {
    "korean": "목",
    "english": "neck",
    "group": "Group 9"
  },
  {
    "korean": "얼굴",
    "english": "face",
    "group": "Group 9"
  },
  {
    "korean": "턱수염",
    "english": "beard",
    "group": "Group 9"
  },
  {
    "korean": "머리카락",
    "english": "hair",
    "group": "Group 9"
  },
  {
    "korean": "눈",
    "english": "eye",
    "group": "Group 9"
  },
  {
    "korean": "입",
    "english": "mouth",
    "group": "Group 9"
  },
  {
    "korean": "입술",
    "english": "lips",
    "group": "Group 9"
  },
  {
    "korean": "코",
    "english": "nose",
    "group": "Group 9"
  },
  {
    "korean": "이빨",
    "english": "tooth",
    "group": "Group 9"
  },
  {
    "korean": "귀",
    "english": "ear",
    "group": "Group 9"
  },
  {
    "korean": "눈물",
    "english": "tears",
    "group": "Group 9"
  },
  {
    "korean": "혀",
    "english": "tongue",
    "group": "Group 9"
  },
  {
    "korean": "등",
    "english": "back",
    "group": "Group 9"
  },
  {
    "korean": "허리",
    "english": "waist, lower back",
    "group": "Group 9"
  },
  {
    "korean": "발가락",
    "english": "toe",
    "group": "Group 9"
  },
  {
    "korean": "손가락",
    "english": "finger",
    "group": "Group 9"
  },
  {
    "korean": "발",
    "english": "foot",
    "group": "Group 9"
  },
  {
    "korean": "손",
    "english": "hand",
    "group": "Group 9"
  },
  {
    "korean": "팔",
    "english": "arm",
    "group": "Group 9"
  },
  {
    "korean": "어깨",
    "english": "shoulder",
    "group": "Group 9"
  },
  {
    "korean": "심장",
    "english": "heart",
    "group": "Group 10"
  },
  {
    "korean": "피",
    "english": "blood",
    "group": "Group 10"
  },
  {
    "korean": "뇌",
    "english": "brain",
    "group": "Group 10"
  },
  {
    "korean": "무릅",
    "english": "knee",
    "group": "Group 10"
  },
  {
    "korean": "땀",
    "english": "sweat",
    "group": "Group 10"
  },
  {
    "korean": "병",
    "english": "disease; illness",
    "group": "Group 10"
  },
  {
    "korean": "뼈",
    "english": "bone",
    "group": "Group 10"
  },
  {
    "korean": "목소리",
    "english": "voice",
    "group": "Group 10"
  },
  {
    "korean": "피부",
    "english": "skin",
    "group": "Group 10"
  },
  {
    "korean": "몸",
    "english": "body",
    "group": "Group 10"
  },
  {
    "korean": "바다",
    "english": "sea, ocean",
    "group": "Group 10"
  },
  {
    "korean": "강",
    "english": "river",
    "group": "Group 10"
  },
  {
    "korean": "산",
    "english": "mountain",
    "group": "Group 10"
  },
  {
    "korean": "비",
    "english": "rain",
    "group": "Group 10"
  },
  {
    "korean": "눈",
    "english": "snow; eye",
    "group": "Group 10"
  },
  {
    "korean": "달",
    "english": "moon; month",
    "group": "Group 10"
  },
  {
    "korean": "세계",
    "english": "world",
    "group": "Group 10"
  },
  {
    "korean": "지구",
    "english": "earth",
    "group": "Group 10"
  },
  {
    "korean": "숲",
    "english": "forest",
    "group": "Group 10"
  },
  {
    "korean": "하늘",
    "english": "sky",
    "group": "Group 10"
  },
  {
    "korean": "식물",
    "english": "plant",
    "group": "Group 10"
  },
  {
    "korean": "바람",
    "english": "wind",
    "group": "Group 10"
  },
  {
    "korean": "토양",
    "english": "soil",
    "group": "Group 10"
  },
  {
    "korean": "꽃",
    "english": "flower",
    "group": "Group 10"
  },
  {
    "korean": "계곡",
    "english": "valley",
    "group": "Group 10"
  },
  {
    "korean": "뿌리",
    "english": "root",
    "group": "Group 10"
  },
  {
    "korean": "호수",
    "english": "lake",
    "group": "Group 10"
  },
  {
    "korean": "별",
    "english": "star",
    "group": "Group 10"
  },
  {
    "korean": "잔디",
    "english": "grass",
    "group": "Group 10"
  },
  {
    "korean": "나뭇잎",
    "english": "leaf",
    "group": "Group 10"
  },
  {
    "korean": "공기",
    "english": "air",
    "group": "Group 11"
  },
  {
    "korean": "모래",
    "english": "sand",
    "group": "Group 11"
  },
  {
    "korean": "해변",
    "english": "beach",
    "group": "Group 11"
  },
  {
    "korean": "파도",
    "english": "wave",
    "group": "Group 11"
  },
  {
    "korean": "불",
    "english": "fire",
    "group": "Group 11"
  },
  {
    "korean": "어름",
    "english": "ice",
    "group": "Group 11"
  },
  {
    "korean": "섬",
    "english": "island",
    "group": "Group 11"
  },
  {
    "korean": "언덕",
    "english": "hill",
    "group": "Group 11"
  },
  {
    "korean": "열",
    "english": "fever; heat",
    "group": "Group 11"
  },
  {
    "korean": "자연",
    "english": "nature",
    "group": "Group 11"
  },
  {
    "korean": "유리",
    "english": "glass",
    "group": "Group 11"
  },
  {
    "korean": "금속",
    "english": "metal",
    "group": "Group 11"
  },
  {
    "korean": "플라스틱",
    "english": "plastic",
    "group": "Group 11"
  },
  {
    "korean": "나무",
    "english": "tree, wood",
    "group": "Group 11"
  },
  {
    "korean": "돌",
    "english": "stone, pebble",
    "group": "Group 11"
  },
  {
    "korean": "다이아몬드",
    "english": "diamond",
    "group": "Group 11"
  },
  {
    "korean": "찰흙",
    "english": "clay",
    "group": "Group 11"
  },
  {
    "korean": "먼지",
    "english": "dust, dirt",
    "group": "Group 11"
  },
  {
    "korean": "금",
    "english": "gold",
    "group": "Group 11"
  },
  {
    "korean": "구리",
    "english": "copper",
    "group": "Group 11"
  },
  {
    "korean": "은",
    "english": "silver",
    "group": "Group 11"
  },
  {
    "korean": "재료",
    "english": "ingredient, material",
    "group": "Group 11"
  },
  {
    "korean": "미터",
    "english": "meter",
    "group": "Group 11"
  },
  {
    "korean": "센티미터",
    "english": "centimeter",
    "group": "Group 11"
  },
  {
    "korean": "킬로미터",
    "english": "kilometer",
    "group": "Group 11"
  },
  {
    "korean": "반",
    "english": "half",
    "group": "Group 11"
  },
  {
    "korean": "서클",
    "english": "circle",
    "group": "Group 11"
  },
  {
    "korean": "정사각형",
    "english": "square",
    "group": "Group 11"
  },
  {
    "korean": "온도",
    "english": "temperature",
    "group": "Group 11"
  },
  {
    "korean": "날짜",
    "english": "date",
    "group": "Group 11"
  },
  {
    "korean": "무게",
    "english": "weight",
    "group": "Group 12"
  },
  {
    "korean": "가장자리",
    "english": "edge",
    "group": "Group 12"
  },
  {
    "korean": "지도",
    "english": "map",
    "group": "Group 12"
  },
  {
    "korean": "점",
    "english": "point",
    "group": "Group 12"
  },
  {
    "korean": "자음",
    "english": "consonant",
    "group": "Group 12"
  },
  {
    "korean": "모음",
    "english": "vowel",
    "group": "Group 12"
  },
  {
    "korean": "가벼운",
    "english": "light (weight)",
    "group": "Group 12"
  },
  {
    "korean": "소리",
    "english": "sound",
    "group": "Group 12"
  },
  {
    "korean": "네",
    "english": "yes, I see, okay (formal)",
    "group": "Group 12"
  },
  {
    "korean": "아니요",
    "english": "No (formal)",
    "group": "Group 12"
  },
  {
    "korean": "조각",
    "english": "piece",
    "group": "Group 12"
  },
  {
    "korean": "아픔",
    "english": "pain",
    "group": "Group 12"
  },
  {
    "korean": "상처",
    "english": "wound",
    "group": "Group 12"
  },
  {
    "korean": "구멍",
    "english": "hole",
    "group": "Group 12"
  },
  {
    "korean": "이미지",
    "english": "image",
    "group": "Group 12"
  },
  {
    "korean": "패턴",
    "english": "pattern",
    "group": "Group 12"
  },
  {
    "korean": "명사",
    "english": "noun",
    "group": "Group 12"
  },
  {
    "korean": "동사",
    "english": "verb",
    "group": "Group 12"
  },
  {
    "korean": "형용사",
    "english": "adjective",
    "group": "Group 12"
  },
  {
    "korean": "위에",
    "english": "above",
    "group": "Group 12"
  },
  {
    "korean": "아래",
    "english": "under",
    "group": "Group 12"
  },
  {
    "korean": "옆면",
    "english": "side of",
    "group": "Group 12"
  },
  {
    "korean": "뒷면",
    "english": "back side",
    "group": "Group 12"
  },
  {
    "korean": "안에",
    "english": "inside",
    "group": "Group 12"
  },
  {
    "korean": "밖에",
    "english": "outside",
    "group": "Group 12"
  },
  {
    "korean": "왼쪽",
    "english": "left side",
    "group": "Group 12"
  },
  {
    "korean": "오른쪽",
    "english": "right side",
    "group": "Group 12"
  },
  {
    "korean": "곧장",
    "english": "straight",
    "group": "Group 12"
  },
  {
    "korean": "북쪽",
    "english": "north",
    "group": "Group 12"
  },
  {
    "korean": "남쪽",
    "english": "south",
    "group": "Group 12"
  },
  {
    "korean": "동쪽",
    "english": "east",
    "group": "Group 13"
  },
  {
    "korean": "서쪽",
    "english": "west",
    "group": "Group 13"
  },
  {
    "korean": "방향",
    "english": "direction",
    "group": "Group 13"
  },
  {
    "korean": "여름",
    "english": "summer",
    "group": "Group 13"
  },
  {
    "korean": "봄",
    "english": "spring",
    "group": "Group 13"
  },
  {
    "korean": "겨울",
    "english": "winter",
    "group": "Group 13"
  },
  {
    "korean": "가을",
    "english": "autumn",
    "group": "Group 13"
  },
  {
    "korean": "계절",
    "english": "season",
    "group": "Group 13"
  },
  {
    "korean": "공",
    "english": "zero; ball",
    "group": "Group 13"
  },
  {
    "korean": "하나",
    "english": 1,
    "group": "Group 13"
  },
  {
    "korean": "둘",
    "english": 2,
    "group": "Group 13"
  },
  {
    "korean": "셋",
    "english": 3,
    "group": "Group 13"
  },
  {
    "korean": "넷",
    "english": 4,
    "group": "Group 13"
  },
  {
    "korean": "다섯",
    "english": 5,
    "group": "Group 13"
  },
  {
    "korean": "여섯",
    "english": 6,
    "group": "Group 13"
  },
  {
    "korean": "일곱",
    "english": 7,
    "group": "Group 13"
  },
  {
    "korean": "여덟",
    "english": 8,
    "group": "Group 13"
  },
  {
    "korean": "아홉",
    "english": 9,
    "group": "Group 13"
  },
  {
    "korean": "열",
    "english": 10,
    "group": "Group 13"
  },
  {
    "korean": "열하나",
    "english": 11,
    "group": "Group 13"
  },
  {
    "korean": "열둘",
    "english": 12,
    "group": "Group 13"
  },
  {
    "korean": "열셋",
    "english": 13,
    "group": "Group 13"
  },
  {
    "korean": "열넷",
    "english": 14,
    "group": "Group 13"
  },
  {
    "korean": "열다섯",
    "english": 15,
    "group": "Group 13"
  },
  {
    "korean": "열여섯",
    "english": 16,
    "group": "Group 13"
  },
  {
    "korean": "열일곱",
    "english": 17,
    "group": "Group 13"
  },
  {
    "korean": "열여덜",
    "english": 18,
    "group": "Group 13"
  },
  {
    "korean": "열아홉",
    "english": 19,
    "group": "Group 13"
  },
  {
    "korean": "스물",
    "english": 20,
    "group": "Group 13"
  },
  {
    "korean": "스물한",
    "english": 21,
    "group": "Group 13"
  },
  {
    "korean": "스물두",
    "english": 22,
    "group": "Group 14"
  },
  {
    "korean": "서른",
    "english": 30,
    "group": "Group 14"
  },
  {
    "korean": "서른하나",
    "english": 31,
    "group": "Group 14"
  },
  {
    "korean": "서른둘",
    "english": 32,
    "group": "Group 14"
  },
  {
    "korean": "마흔",
    "english": 40,
    "group": "Group 14"
  },
  {
    "korean": "마흔하나",
    "english": 41,
    "group": "Group 14"
  },
  {
    "korean": "마흔둘",
    "english": 42,
    "group": "Group 14"
  },
  {
    "korean": "쉰",
    "english": 50,
    "group": "Group 14"
  },
  {
    "korean": "쉰하나",
    "english": 51,
    "group": "Group 14"
  },
  {
    "korean": "쉰둘",
    "english": 52,
    "group": "Group 14"
  },
  {
    "korean": "예순",
    "english": 60,
    "group": "Group 14"
  },
  {
    "korean": "예순하나",
    "english": 61,
    "group": "Group 14"
  },
  {
    "korean": "예순둘",
    "english": 62,
    "group": "Group 14"
  },
  {
    "korean": "여든",
    "english": 80,
    "group": "Group 14"
  },
  {
    "korean": "여든하나",
    "english": 81,
    "group": "Group 14"
  },
  {
    "korean": "여든둘",
    "english": 82,
    "group": "Group 14"
  },
  {
    "korean": "아흔",
    "english": 90,
    "group": "Group 14"
  },
  {
    "korean": "아흔하나",
    "english": 91,
    "group": "Group 14"
  },
  {
    "korean": "아흔둘",
    "english": 92,
    "group": "Group 14"
  },
  {
    "korean": "백",
    "english": 100,
    "group": "Group 14"
  },
  {
    "korean": "백하나",
    "english": 101,
    "group": "Group 14"
  },
  {
    "korean": "백둘",
    "english": 102,
    "group": "Group 14"
  },
  {
    "korean": "백십",
    "english": 110,
    "group": "Group 14"
  },
  {
    "korean": "백십일",
    "english": 111,
    "group": "Group 14"
  },
  {
    "korean": "천",
    "english": 1000,
    "group": "Group 14"
  },
  {
    "korean": "천일",
    "english": 1001,
    "group": "Group 14"
  },
  {
    "korean": "만",
    "english": 10000,
    "group": "Group 14"
  },
  {
    "korean": "십만",
    "english": 100000,
    "group": "Group 14"
  },
  {
    "korean": "백만",
    "english": 1000000,
    "group": "Group 14"
  },
  {
    "korean": "천만",
    "english": 10000000,
    "group": "Group 14"
  },
  {
    "korean": "억",
    "english": 100000000,
    "group": "Group 15"
  },
  {
    "korean": "십억",
    "english": 1000000000,
    "group": "Group 15"
  },
  {
    "korean": "첫번째",
    "english": "first",
    "group": "Group 15"
  },
  {
    "korean": "둘째",
    "english": "second",
    "group": "Group 15"
  },
  {
    "korean": "세번째",
    "english": "third",
    "group": "Group 15"
  },
  {
    "korean": "네번째",
    "english": "fourth",
    "group": "Group 15"
  },
  {
    "korean": "다섯번째",
    "english": "fifth",
    "group": "Group 15"
  },
  {
    "korean": "번호",
    "english": "number",
    "group": "Group 15"
  },
  {
    "korean": "일월",
    "english": "January",
    "group": "Group 15"
  },
  {
    "korean": "이월",
    "english": "February",
    "group": "Group 15"
  },
  {
    "korean": "삼월",
    "english": "March",
    "group": "Group 15"
  },
  {
    "korean": "사월",
    "english": "April",
    "group": "Group 15"
  },
  {
    "korean": "오월",
    "english": "May",
    "group": "Group 15"
  },
  {
    "korean": "유월",
    "english": "June",
    "group": "Group 15"
  },
  {
    "korean": "칠월",
    "english": "July",
    "group": "Group 15"
  },
  {
    "korean": "팔월",
    "english": "August",
    "group": "Group 15"
  },
  {
    "korean": "구월",
    "english": "September",
    "group": "Group 15"
  },
  {
    "korean": "시월",
    "english": "October",
    "group": "Group 15"
  },
  {
    "korean": "십일월",
    "english": "November",
    "group": "Group 15"
  },
  {
    "korean": "십이월",
    "english": "December",
    "group": "Group 15"
  },
  {
    "korean": "월요일",
    "english": "Monday",
    "group": "Group 15"
  },
  {
    "korean": "화요일",
    "english": "Tuesday",
    "group": "Group 15"
  },
  {
    "korean": "수요일",
    "english": "Wednesday",
    "group": "Group 15"
  },
  {
    "korean": "목요일",
    "english": "Thursday",
    "group": "Group 15"
  },
  {
    "korean": "금요일",
    "english": "Friday",
    "group": "Group 15"
  },
  {
    "korean": "토요일",
    "english": "Saturday",
    "group": "Group 15"
  },
  {
    "korean": "일요일",
    "english": "Sunday",
    "group": "Group 15"
  },
  {
    "korean": "년",
    "english": "year (counter)",
    "group": "Group 15"
  },
  {
    "korean": "달",
    "english": "month (counter)",
    "group": "Group 15"
  },
  {
    "korean": "시간",
    "english": "hour (duration); time",
    "group": "Group 15"
  },
  {
    "korean": "분",
    "english": "minute; person (honorific)",
    "group": "Group 16"
  },
  {
    "korean": "밤",
    "english": "night",
    "group": "Group 16"
  },
  {
    "korean": "일하다",
    "english": "to work",
    "group": "Group 16"
  },
  {
    "korean": "놀다",
    "english": "to play",
    "group": "Group 16"
  },
  {
    "korean": "걷다",
    "english": "to walk",
    "group": "Group 16"
  },
  {
    "korean": "뛰다",
    "english": "to run",
    "group": "Group 16"
  },
  {
    "korean": "운전하다",
    "english": "to drive",
    "group": "Group 16"
  },
  {
    "korean": "날다",
    "english": "to fly",
    "group": "Group 16"
  },
  {
    "korean": "수영하다",
    "english": "to swim",
    "group": "Group 16"
  },
  {
    "korean": "가다",
    "english": "to go",
    "group": "Group 16"
  },
  {
    "korean": "멈추다",
    "english": "to stop",
    "group": "Group 16"
  },
  {
    "korean": "따르다",
    "english": "to follow",
    "group": "Group 16"
  },
  {
    "korean": "생각하다",
    "english": "to think",
    "group": "Group 16"
  },
  {
    "korean": "말하다",
    "english": "to speak",
    "group": "Group 16"
  },
  {
    "korean": "먹다",
    "english": "to eat",
    "group": "Group 16"
  },
  {
    "korean": "마시다",
    "english": "to drink",
    "group": "Group 16"
  },
  {
    "korean": "죽이다",
    "english": "to kill",
    "group": "Group 16"
  },
  {
    "korean": "죽다",
    "english": "to die",
    "group": "Group 16"
  },
  {
    "korean": "웃다",
    "english": "to laugh, smile",
    "group": "Group 16"
  },
  {
    "korean": "울다",
    "english": "to cry",
    "group": "Group 16"
  },
  {
    "korean": "사다",
    "english": "to buy",
    "group": "Group 16"
  },
  {
    "korean": "지불하다",
    "english": "to pay",
    "group": "Group 16"
  },
  {
    "korean": "팔다",
    "english": "to sell",
    "group": "Group 16"
  },
  {
    "korean": "쏘다",
    "english": "to shoot",
    "group": "Group 16"
  },
  {
    "korean": "배우다",
    "english": "to learn",
    "group": "Group 16"
  },
  {
    "korean": "점프하다",
    "english": "to jump",
    "group": "Group 16"
  },
  {
    "korean": "냄새를 맡다",
    "english": "to smell something",
    "group": "Group 16"
  },
  {
    "korean": "듣다",
    "english": "to listen, hear",
    "group": "Group 16"
  },
  {
    "korean": "맛보다",
    "english": "to taste",
    "group": "Group 16"
  },
  {
    "korean": "보다",
    "english": "to see",
    "group": "Group 16"
  },
  {
    "korean": "만지다",
    "english": "to touch",
    "group": "Group 17"
  },
  {
    "korean": "뽀뽀하다",
    "english": "to kiss",
    "group": "Group 17"
  },
  {
    "korean": "불타다",
    "english": "to burn",
    "group": "Group 17"
  },
  {
    "korean": "녹다",
    "english": "to melt",
    "group": "Group 17"
  },
  {
    "korean": "파다",
    "english": "to dig",
    "group": "Group 17"
  },
  {
    "korean": "폭발하다",
    "english": "to explode",
    "group": "Group 17"
  },
  {
    "korean": "앉다",
    "english": "to sit",
    "group": "Group 17"
  },
  {
    "korean": "서다",
    "english": "to stand",
    "group": "Group 17"
  },
  {
    "korean": "사랑하다",
    "english": "to love",
    "group": "Group 17"
  },
  {
    "korean": "지나가다",
    "english": "to pass by",
    "group": "Group 17"
  },
  {
    "korean": "자르다",
    "english": "to cut (hair/trees/papers...)",
    "group": "Group 17"
  },
  {
    "korean": "싸우다",
    "english": "to fight",
    "group": "Group 17"
  },
  {
    "korean": "눕다",
    "english": "to lie down",
    "group": "Group 17"
  },
  {
    "korean": "춤추다",
    "english": "to dance",
    "group": "Group 17"
  },
  {
    "korean": "자다",
    "english": "to sleep",
    "group": "Group 17"
  },
  {
    "korean": "깨다",
    "english": "to wake up",
    "group": "Group 17"
  },
  {
    "korean": "노래하다",
    "english": "to sing",
    "group": "Group 17"
  },
  {
    "korean": "세다",
    "english": "to count",
    "group": "Group 17"
  },
  {
    "korean": "결혼하다",
    "english": "to marry",
    "group": "Group 17"
  },
  {
    "korean": "기도하다",
    "english": "to pray",
    "group": "Group 17"
  },
  {
    "korean": "이기다",
    "english": "to win",
    "group": "Group 17"
  },
  {
    "korean": "지다",
    "english": "to lose",
    "group": "Group 17"
  },
  {
    "korean": "섞다",
    "english": "to mix",
    "group": "Group 17"
  },
  {
    "korean": "구부리다",
    "english": "to bend",
    "group": "Group 17"
  },
  {
    "korean": "씻다",
    "english": "to wash",
    "group": "Group 17"
  },
  {
    "korean": "요리하다",
    "english": "to cook",
    "group": "Group 17"
  },
  {
    "korean": "열다",
    "english": "to open",
    "group": "Group 17"
  },
  {
    "korean": "닫다",
    "english": "to close",
    "group": "Group 17"
  },
  {
    "korean": "쓰다",
    "english": "to write",
    "group": "Group 17"
  },
  {
    "korean": "부르다",
    "english": "to call",
    "group": "Group 17"
  },
  {
    "korean": "돌다",
    "english": "to turn",
    "group": "Group 18"
  },
  {
    "korean": "건설하다",
    "english": "To construct or erect",
    "group": "Group 18"
  },
  {
    "korean": "가르치다",
    "english": "to teach",
    "group": "Group 18"
  },
  {
    "korean": "자라다",
    "english": "to grow up",
    "group": "Group 18"
  },
  {
    "korean": "그리다",
    "english": "to draw",
    "group": "Group 18"
  },
  {
    "korean": "먹이다",
    "english": "to feed",
    "group": "Group 18"
  },
  {
    "korean": "잡다",
    "english": "to catch",
    "group": "Group 18"
  },
  {
    "korean": "던지다",
    "english": "to throw",
    "group": "Group 18"
  },
  {
    "korean": "청소하다",
    "english": "to clean",
    "group": "Group 18"
  },
  {
    "korean": "찾다",
    "english": "to find, look for",
    "group": "Group 18"
  },
  {
    "korean": "넘어지다",
    "english": "to fall down",
    "group": "Group 18"
  },
  {
    "korean": "밀다",
    "english": "to push",
    "group": "Group 18"
  },
  {
    "korean": "당기다",
    "english": "pull",
    "group": "Group 18"
  },
  {
    "korean": "들다",
    "english": "to cost; carry",
    "group": "Group 18"
  },
  {
    "korean": "망가지다",
    "english": "to break down",
    "group": "Group 18"
  },
  {
    "korean": "깨지다",
    "english": "to break",
    "group": "Group 18"
  },
  {
    "korean": "입다",
    "english": "to wear",
    "group": "Group 18"
  },
  {
    "korean": "흔들다",
    "english": "to shake",
    "group": "Group 18"
  },
  {
    "korean": "서명하다",
    "english": "to sign (signature)",
    "group": "Group 18"
  },
  {
    "korean": "패다",
    "english": "To beat, to bash",
    "group": "Group 18"
  },
  {
    "korean": "들어올리다",
    "english": "to lift",
    "group": "Group 18"
  },
  {
    "korean": "길다",
    "english": "to be long",
    "group": "Group 18"
  },
  {
    "korean": "짧다",
    "english": "to be short",
    "group": "Group 18"
  },
  {
    "korean": "키가 크다",
    "english": "to be tall (height)",
    "group": "Group 18"
  },
  {
    "korean": "키가 작다",
    "english": "to be short (short)",
    "group": "Group 18"
  },
  {
    "korean": "넓다",
    "english": "to be wide",
    "group": "Group 18"
  },
  {
    "korean": "크다",
    "english": "to be big",
    "group": "Group 18"
  },
  {
    "korean": "작다",
    "english": "to be small",
    "group": "Group 18"
  },
  {
    "korean": "느리다",
    "english": "to be slow",
    "group": "Group 18"
  },
  {
    "korean": "빠르다",
    "english": "to be fast",
    "group": "Group 18"
  },
  {
    "korean": "뜨겁다",
    "english": "to be hot",
    "group": "Group 19"
  },
  {
    "korean": "차겁다",
    "english": "to be cold",
    "group": "Group 19"
  },
  {
    "korean": "따뜻하다",
    "english": "to be warm",
    "group": "Group 19"
  },
  {
    "korean": "선선하다",
    "english": "to be cool",
    "group": "Group 19"
  },
  {
    "korean": "새롭다",
    "english": "to be new",
    "group": "Group 19"
  },
  {
    "korean": "오래되다",
    "english": "to be old (for inanimate objects)",
    "group": "Group 19"
  },
  {
    "korean": "젊다",
    "english": "To be young,youthful",
    "group": "Group 19"
  },
  {
    "korean": "늙다",
    "english": "to be old (person)",
    "group": "Group 19"
  },
  {
    "korean": "좋다",
    "english": "to be good",
    "group": "Group 19"
  },
  {
    "korean": "나쁘다",
    "english": "to be bad",
    "group": "Group 19"
  },
  {
    "korean": "젖다",
    "english": "to be wet, damp",
    "group": "Group 19"
  },
  {
    "korean": "건조하다",
    "english": "to be dry",
    "group": "Group 19"
  },
  {
    "korean": "아프다",
    "english": "to be sick, hurt",
    "group": "Group 19"
  },
  {
    "korean": "건강하다",
    "english": "to be healthy",
    "group": "Group 19"
  },
  {
    "korean": "시끄럽다",
    "english": "to be noisy, loud",
    "group": "Group 19"
  },
  {
    "korean": "조용하다",
    "english": "to be quiet",
    "group": "Group 19"
  },
  {
    "korean": "행복하다",
    "english": "to be happy",
    "group": "Group 19"
  },
  {
    "korean": "슬프다",
    "english": "to be sad",
    "group": "Group 19"
  },
  {
    "korean": "아름답다",
    "english": "to be beautiful",
    "group": "Group 19"
  },
  {
    "korean": "못생기다",
    "english": "to be ugly",
    "group": "Group 19"
  },
  {
    "korean": "귀머거리",
    "english": "deaf person",
    "group": "Group 19"
  },
  {
    "korean": "맹인",
    "english": "blind person",
    "group": "Group 19"
  },
  {
    "korean": "착하다",
    "english": "to be nice, kind",
    "group": "Group 19"
  },
  {
    "korean": "가난하다",
    "english": "to be poor",
    "group": "Group 19"
  },
  {
    "korean": "부유하다",
    "english": "to be wealthy",
    "group": "Group 19"
  },
  {
    "korean": "두껍다",
    "english": "to be thick",
    "group": "Group 19"
  },
  {
    "korean": "얇다",
    "english": "to be thin",
    "group": "Group 19"
  },
  {
    "korean": "비싸다",
    "english": "to be expensive",
    "group": "Group 19"
  },
  {
    "korean": "싸다",
    "english": "to be cheap",
    "group": "Group 19"
  },
  {
    "korean": "평탄하다",
    "english": "to be smooth, flat",
    "group": "Group 19"
  },
  {
    "korean": "구부러지다",
    "english": "to be bent",
    "group": "Group 20"
  },
  {
    "korean": "끼다",
    "english": "To put on or wear, to wear (a ring)",
    "group": "Group 20"
  },
  {
    "korean": "헐렁하다",
    "english": "to be loose, baggy",
    "group": "Group 20"
  },
  {
    "korean": "놉다",
    "english": "to be high",
    "group": "Group 20"
  },
  {
    "korean": "낮다",
    "english": "to be low",
    "group": "Group 20"
  },
  {
    "korean": "딱딱하다",
    "english": "to be hard",
    "group": "Group 20"
  },
  {
    "korean": "부드럽다",
    "english": "to be soft",
    "group": "Group 20"
  },
  {
    "korean": "깊다",
    "english": "to be deep",
    "group": "Group 20"
  },
  {
    "korean": "얕다",
    "english": "to be shallow",
    "group": "Group 20"
  },
  {
    "korean": "깨끗하다",
    "english": "to be clean",
    "group": "Group 20"
  },
  {
    "korean": "더럽다",
    "english": "to be dirty",
    "group": "Group 20"
  },
  {
    "korean": "힘이 세다",
    "english": "to be strong",
    "group": "Group 20"
  },
  {
    "korean": "약하다",
    "english": "to be weak",
    "group": "Group 20"
  },
  {
    "korean": "살다",
    "english": "to live",
    "group": "Group 20"
  },
  {
    "korean": "무겁다",
    "english": "to be heavy",
    "group": "Group 20"
  },
  {
    "korean": "가볍다",
    "english": "to be light",
    "group": "Group 20"
  },
  {
    "korean": "어둡다",
    "english": "to be dark",
    "group": "Group 20"
  },
  {
    "korean": "밝다",
    "english": "to be bright",
    "group": "Group 20"
  },
  {
    "korean": "인기가 많다",
    "english": "to be popular",
    "group": "Group 20"
  },
  {
    "korean": "저",
    "english": "I, me (formal); that",
    "group": "Group 20"
  },
  {
    "korean": "나",
    "english": "I, me (informal)",
    "group": "Group 20"
  },
  {
    "korean": "그",
    "english": "that, he, she, it",
    "group": "Group 20"
  },
  {
    "korean": "우리",
    "english": "we, our",
    "group": "Group 20"
  },
  {
    "korean": "상대방",
    "english": "Other party, counterpart",
    "group": "Group 20"
  },
  {
    "korean": "저의",
    "english": "my (formal)",
    "group": "Group 20"
  },
  {
    "korean": "내",
    "english": "my (informal)",
    "group": "Group 20"
  },
  {
    "korean": "당신",
    "english": "you (formal)",
    "group": "Group 20"
  },
  {
    "korean": "내가",
    "english": "I (as subject)",
    "group": "Group 20"
  },
  {
    "korean": "네가",
    "english": "you",
    "group": "Group 20"
  },
  {
    "korean": "너희들",
    "english": "you (plural)/ (all of) you",
    "group": "Group 20"
  }
];