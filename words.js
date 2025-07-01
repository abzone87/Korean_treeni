const words = [
  {
    "korean": "사고",
    "english": "accident",
    "example_ko": "공장에서 사고가 났어요.",
    "example_en": "There was an accident at the factory."
  },
  {
    "korean": "숙소",
    "english": "accommodation",
    "example_ko": "숙소를 예약했어요.",
    "example_en": "I reserved accommodation."
  },
  {
    "korean": "회계사",
    "english": "accountant",
    "example_ko": "회계사가 일을 했어요.",
    "example_en": "The accountant worked."
  },
  {
    "korean": "회계",
    "english": "accounting",
    "example_ko": "회계 업무를 맡았어요.",
    "example_en": "I handled accounting tasks."
  },
  {
    "korean": "배우",
    "english": "actor",
    "example_ko": "배우가 무대에 올랐어요.",
    "example_en": "The actor went on stage."
  },
  {
    "korean": "배우",
    "english": "actor/actress",
    "example_ko": "배우가 연기했어요.",
    "example_en": "The actor acted."
  },
  {
    "korean": "주소",
    "english": "address",
    "example_ko": "주소를 확인했어요.",
    "example_en": "I checked the address."
  },
  {
    "korean": "입학",
    "english": "admission",
    "example_ko": "대학에 입학했어요.",
    "example_en": "I was admitted to the university."
  },
  {
    "korean": "입학",
    "english": "admission/enrollment",
    "example_ko": "입학했어요.",
    "example_en": "I enrolled."
  },
  {
    "korean": "어른",
    "english": "adult",
    "example_ko": "어른들이 이야기하고 있어요.",
    "example_en": "Adults are talking."
  },
  {
    "korean": "방과후",
    "english": "after school",
    "example_ko": "방과후 수업이 있어요.",
    "example_en": "There is an after-school class."
  },
  {
    "korean": "공기",
    "english": "air",
    "example_ko": "공기가 깨끗해요.",
    "example_en": "The air is clean."
  },
  {
    "korean": "에어컨",
    "english": "air conditioner",
    "example_ko": "에어컨을 켰어요.",
    "example_en": "I turned on the air conditioner."
  },
  {
    "korean": "냉방",
    "english": "air conditioning",
    "example_ko": "냉방을 켰어요.",
    "example_en": "I turned on the air conditioning."
  },
  {
    "korean": "비행기",
    "english": "airplane",
    "example_ko": "비행기를 처음 타봤어요.",
    "example_en": "It was my first time flying."
  },
  {
    "korean": "공항",
    "english": "airport",
    "example_ko": "공항에 일찍 도착했어요.",
    "example_en": "I arrived early at the airport."
  },
  {
    "korean": "술",
    "english": "alcohol",
    "example_ko": "술을 마셨어요.",
    "example_en": "I drank alcohol."
  },
  {
    "korean": "알레르기",
    "english": "allergy",
    "example_ko": "알레르기가 있어요.",
    "example_en": "I have an allergy."
  },
  {
    "korean": "구급차",
    "english": "ambulance",
    "example_ko": "구급차가 왔어요.",
    "example_en": "The ambulance came."
  },
  {
    "korean": "마취",
    "english": "anesthesia",
    "example_ko": "마취를 했어요.",
    "example_en": "I was anesthetized."
  },
  {
    "korean": "동물",
    "english": "animal",
    "example_ko": "동물을 좋아해요.",
    "example_en": "I like animals."
  },
  {
    "korean": "안내 방송",
    "english": "announcement",
    "example_ko": "안내 방송을 들었어요.",
    "example_en": "I heard the announcement."
  },
  {
    "korean": "연봉",
    "english": "annual salary",
    "example_ko": "연봉이 올랐어요.",
    "example_en": "The annual salary increased."
  },
  {
    "korean": "대답",
    "english": "answer",
    "example_ko": "대답을 했어요.",
    "example_en": "I gave an answer."
  },
  {
    "korean": "아파트",
    "english": "apartment",
    "example_ko": "아파트에 살아요.",
    "example_en": "I live in an apartment."
  },
  {
    "korean": "앱",
    "english": "app",
    "example_ko": "새 앱을 다운로드했어요.",
    "example_en": "I downloaded a new app."
  },
  {
    "korean": "식욕",
    "english": "appetite",
    "example_ko": "식욕이 좋아요.",
    "example_en": "I have a good appetite."
  },
  {
    "korean": "박수",
    "english": "applause",
    "example_ko": "큰 박수를 보냈어요.",
    "example_en": "I gave big applause."
  },
  {
    "korean": "사과",
    "english": "apple",
    "example_ko": "저는 아침마다 사과를 먹어요.",
    "example_en": "I eat an apple every morning."
  },
  {
    "korean": "약속",
    "english": "appointment",
    "example_ko": "약속 시간이 있어요.",
    "example_en": "I have an appointment."
  },
  {
    "korean": "도착",
    "english": "arrival",
    "example_ko": "도착 시간이 지났어요.",
    "example_en": "Arrival time has passed."
  },
  {
    "korean": "예술",
    "english": "art",
    "example_ko": "예술은 감정을 표현해요.",
    "example_en": "Art expresses emotions."
  },
  {
    "korean": "미술관",
    "english": "art gallery",
    "example_ko": "미술관에 갔어요.",
    "example_en": "I went to the art gallery."
  },
  {
    "korean": "미술관",
    "english": "art museum",
    "example_ko": "미술관에 갔어요.",
    "example_en": "I went to the art museum."
  },
  {
    "korean": "과제",
    "english": "assignment",
    "example_ko": "과제를 제출했어요.",
    "example_en": "I submitted the assignment."
  },
  {
    "korean": "운동선수",
    "english": "athlete",
    "example_ko": "운동선수가 달려요.",
    "example_en": "The athlete runs."
  },
  {
    "korean": "현금인출기",
    "english": "ATM",
    "example_ko": "현금인출기를 찾았어요.",
    "example_en": "I found an ATM."
  },
  {
    "korean": "출석",
    "english": "attendance",
    "example_ko": "출석을 했어요.",
    "example_en": "I attended."
  },
  {
    "korean": "명소",
    "english": "attraction",
    "example_ko": "명소를 구경했어요.",
    "example_en": "I visited the attraction."
  },
  {
    "korean": "관객",
    "english": "audience",
    "example_ko": "관객들이 박수를 쳤어요.",
    "example_en": "The audience clapped."
  },
  {
    "korean": "고모",
    "english": "aunt (father’s sister)",
    "example_ko": "고모가 요리해 주셨어요.",
    "example_en": "Aunt cooked for me."
  },
  {
    "korean": "이모",
    "english": "aunt (mother’s sister)",
    "example_ko": "이모가 집에 오셨어요.",
    "example_en": "Aunt came home."
  },
  {
    "korean": "가을",
    "english": "autumn/fall",
    "example_ko": "가을에 단풍이 예뻐요.",
    "example_en": "The autumn leaves are pretty."
  },
  {
    "korean": "아기",
    "english": "baby",
    "example_ko": "아기가 울고 있어요.",
    "example_en": "The baby is crying."
  },
  {
    "korean": "가방",
    "english": "bag",
    "example_ko": "가방이 무거워요.",
    "example_en": "My bag is heavy."
  },
  {
    "korean": "가방끈",
    "english": "bag strap",
    "example_ko": "가방끈이 끊어졌어요.",
    "example_en": "The bag strap broke."
  },
  {
    "korean": "은행",
    "english": "bank",
    "example_ko": "은행에서 돈을 찾았어요.",
    "example_en": "I withdrew money from the bank."
  },
  {
    "korean": "계좌",
    "english": "bank account",
    "example_ko": "새 계좌를 개설했어요.",
    "example_en": "I opened a new bank account."
  },
  {
    "korean": "야구",
    "english": "baseball",
    "example_ko": "야구 경기를 봤어요.",
    "example_en": "I watched a baseball game."
  },
  {
    "korean": "농구",
    "english": "basketball",
    "example_ko": "농구를 배웠어요.",
    "example_en": "I learned basketball."
  },
  {
    "korean": "욕실",
    "english": "bathroom",
    "example_ko": "욕실이 깨끗해요.",
    "example_en": "The bathroom is clean."
  },
  {
    "korean": "해변",
    "english": "beach",
    "example_ko": "해변에서 쉬었어요.",
    "example_en": "I rested at the beach."
  },
  {
    "korean": "침대",
    "english": "bed",
    "example_ko": "침대에서 쉬었어요.",
    "example_en": "I rested on the bed."
  },
  {
    "korean": "침실",
    "english": "bedroom",
    "example_ko": "침실에서 잠을 잤어요.",
    "example_en": "I slept in the bedroom."
  },
  {
    "korean": "벌",
    "english": "bee",
    "example_ko": "벌이 날아다녀요.",
    "example_en": "Bees are flying around."
  },
  {
    "korean": "맥주",
    "english": "beer",
    "example_ko": "맥주 한 잔 하실래요?",
    "example_en": "Would you like a glass of beer?"
  },
  {
    "korean": "음료수",
    "english": "beverage",
    "example_ko": "시원한 음료수를 마셨어요.",
    "example_en": "I drank a cold beverage."
  },
  {
    "korean": "자전거",
    "english": "bicycle",
    "example_ko": "자전거를 타요.",
    "example_en": "I ride a bicycle."
  },
  {
    "korean": "계산서",
    "english": "bill",
    "example_ko": "계산서를 받았어요.",
    "example_en": "I received the bill."
  },
  {
    "korean": "계산서",
    "english": "bill/check",
    "example_ko": "계산서를 주세요.",
    "example_en": "Please give me the bill."
  },
  {
    "korean": "계산",
    "english": "bill/payment",
    "example_ko": "계산을 했어요.",
    "example_en": "I paid the bill."
  },
  {
    "korean": "새",
    "english": "bird",
    "example_ko": "새가 노래해요.",
    "example_en": "The bird is singing."
  },
  {
    "korean": "생일",
    "english": "birthday",
    "example_ko": "생일 파티를 준비했어요.",
    "example_en": "I prepared a birthday party."
  },
  {
    "korean": "쓰다",
    "english": "bitter/use/write",
    "example_ko": "커피가 써요.",
    "example_en": "The coffee is bitter."
  },
  {
    "korean": "칠판",
    "english": "blackboard",
    "example_ko": "칠판에 글씨를 썼어요.",
    "example_en": "I wrote on the blackboard."
  },
  {
    "korean": "이불",
    "english": "blanket",
    "example_ko": "이불을 덮었어요.",
    "example_en": "I covered myself with a blanket."
  },
  {
    "korean": "혈압",
    "english": "blood pressure",
    "example_ko": "혈압이 높아요.",
    "example_en": "My blood pressure is high."
  },
  {
    "korean": "피검사",
    "english": "blood test",
    "example_ko": "피검사를 했어요.",
    "example_en": "I had a blood test."
  },
  {
    "korean": "탑승",
    "english": "boarding",
    "example_ko": "비행기 탑승 시간이예요.",
    "example_en": "It’s boarding time for the airplane."
  },
  {
    "korean": "체온",
    "english": "body temperature",
    "example_ko": "체온을 측정했어요.",
    "example_en": "I measured my body temperature."
  },
  {
    "korean": "체중",
    "english": "body weight",
    "example_ko": "체중이 줄었어요.",
    "example_en": "My body weight decreased."
  },
  {
    "korean": "끓이다",
    "english": "boil",
    "example_ko": "물을 끓였어요.",
    "example_en": "I boiled water."
  },
  {
    "korean": "책",
    "english": "book",
    "example_ko": "그 책은 정말 흥미진진했어요.",
    "example_en": "That book was really exciting."
  },
  {
    "korean": "도서",
    "english": "books",
    "example_ko": "도서를 빌렸어요.",
    "example_en": "I borrowed books."
  },
  {
    "korean": "책장",
    "english": "bookshelf",
    "example_ko": "책장이 무거워요.",
    "example_en": "The bookshelf is heavy."
  },
  {
    "korean": "상사",
    "english": "boss",
    "example_ko": "상사가 친절해요.",
    "example_en": "My boss is kind."
  },
  {
    "korean": "사장",
    "english": "boss/CEO",
    "example_ko": "사장이 회의를 했어요.",
    "example_en": "The boss had a meeting."
  },
  {
    "korean": "그릇",
    "english": "bowl",
    "example_ko": "국을 그릇에 담았어요.",
    "example_en": "I put soup in a bowl."
  },
  {
    "korean": "상자",
    "english": "box",
    "example_ko": "상자에 넣었어요.",
    "example_en": "I put it in a box."
  },
  {
    "korean": "팔찌",
    "english": "bracelet",
    "example_ko": "팔찌를 샀어요.",
    "example_en": "I bought a bracelet."
  },
  {
    "korean": "빵",
    "english": "bread",
    "example_ko": "아침으로 빵을 먹었어요.",
    "example_en": "I had bread for breakfast."
  },
  {
    "korean": "쉬는 시간",
    "english": "break time",
    "example_ko": "쉬는 시간이 필요해요.",
    "example_en": "I need a break time."
  },
  {
    "korean": "아침",
    "english": "breakfast/morning",
    "example_ko": "아침을 먹었어요.",
    "example_en": "I ate breakfast."
  },
  {
    "korean": "방송",
    "english": "broadcast",
    "example_ko": "방송을 시청했어요.",
    "example_en": "I watched the broadcast."
  },
  {
    "korean": "예산",
    "english": "budget",
    "example_ko": "예산을 짰어요.",
    "example_en": "I made a budget."
  },
  {
    "korean": "빌딩",
    "english": "building",
    "example_ko": "큰 빌딩이 많아요.",
    "example_en": "There are many tall buildings."
  },
  {
    "korean": "버스",
    "english": "bus",
    "example_ko": "버스를 타고 학교에 갔어요.",
    "example_en": "I took the bus to school."
  },
  {
    "korean": "버스 정류장",
    "english": "bus stop",
    "example_ko": "버스 정류장에서 기다려요.",
    "example_en": "I wait at the bus stop."
  },
  {
    "korean": "사업",
    "english": "business",
    "example_ko": "사업을 운영해요.",
    "example_en": "I run a business."
  },
  {
    "korean": "출장",
    "english": "business trip",
    "example_ko": "출장으로 부산에 갔어요.",
    "example_en": "I went to Busan on a business trip."
  },
  {
    "korean": "버터",
    "english": "butter",
    "example_ko": "빵에 버터를 발랐어요.",
    "example_en": "I spread butter on the bread."
  },
  {
    "korean": "나비",
    "english": "butterfly",
    "example_ko": "나비가 날아요.",
    "example_en": "The butterfly is flying."
  },
  {
    "korean": "케이블",
    "english": "cable",
    "example_ko": "케이블이 길어요.",
    "example_en": "The cable is long."
  },
  {
    "korean": "카페",
    "english": "cafe",
    "example_ko": "카페에서 커피를 마셨어요.",
    "example_en": "I drank coffee at the cafe."
  },
  {
    "korean": "케이크",
    "english": "cake",
    "example_ko": "케이크를 먹었어요.",
    "example_en": "I ate cake."
  },
  {
    "korean": "달력",
    "english": "calendar",
    "example_ko": "달력에 표시했어요.",
    "example_en": "I marked it on the calendar."
  },
  {
    "korean": "카메라",
    "english": "camera",
    "example_ko": "카메라로 사진을 찍었어요.",
    "example_en": "I took a picture with the camera."
  },
  {
    "korean": "캠핑",
    "english": "camping",
    "example_ko": "캠핑을 갔어요.",
    "example_en": "I went camping."
  },
  {
    "korean": "캠퍼스",
    "english": "campus",
    "example_ko": "캠퍼스가 넓어요.",
    "example_en": "The campus is large."
  },
  {
    "korean": "사탕",
    "english": "candy",
    "example_ko": "사탕을 먹었어요.",
    "example_en": "I ate candy."
  },
  {
    "korean": "자동차",
    "english": "car",
    "example_ko": "그는 새 자동차를 샀어요.",
    "example_en": "He bought a new car."
  },
  {
    "korean": "차",
    "english": "car/tea",
    "example_ko": "차를 마셨어요.",
    "example_en": "I drank tea."
  },
  {
    "korean": "카드",
    "english": "card",
    "example_ko": "카드로 결제했어요.",
    "example_en": "I paid with a card."
  },
  {
    "korean": "현금",
    "english": "cash",
    "example_ko": "현금을 준비했어요.",
    "example_en": "I prepared cash."
  },
  {
    "korean": "계산대",
    "english": "cashier",
    "example_ko": "계산대에서 기다렸어요.",
    "example_en": "I waited at the cashier."
  },
  {
    "korean": "고양이",
    "english": "cat",
    "example_ko": "고양이는 귀엽고 조용해요.",
    "example_en": "Cats are cute and quiet."
  },
  {
    "korean": "충치",
    "english": "cavity",
    "example_ko": "충치가 생겼어요.",
    "example_en": "I have a cavity."
  },
  {
    "korean": "천장",
    "english": "ceiling",
    "example_ko": "천장이 높아요.",
    "example_en": "The ceiling is high."
  },
  {
    "korean": "축하",
    "english": "celebration",
    "example_ko": "친구의 생일을 축하했어요.",
    "example_en": "I celebrated my friend's birthday."
  },
  {
    "korean": "자격증",
    "english": "certificate",
    "example_ko": "자격증을 땄어요.",
    "example_en": "I earned a certificate."
  },
  {
    "korean": "의자",
    "english": "chair",
    "example_ko": "의자에 앉았어요.",
    "example_en": "I sat on the chair."
  },
  {
    "korean": "도전",
    "english": "challenge",
    "example_ko": "도전에 성공했어요.",
    "example_en": "I succeeded in the challenge."
  },
  {
    "korean": "이직",
    "english": "changing jobs",
    "example_ko": "이직을 고민하고 있어요.",
    "example_en": "I’m thinking about changing jobs."
  },
  {
    "korean": "충전기",
    "english": "charger",
    "example_ko": "충전기를 잃어버렸어요.",
    "example_en": "I lost the charger."
  },
  {
    "korean": "치즈",
    "english": "cheese",
    "example_ko": "치즈가 든 피자를 좋아해요.",
    "example_en": "I like pizza with cheese."
  },
  {
    "korean": "요리사",
    "english": "chef",
    "example_ko": "요리사가 요리해요.",
    "example_en": "The chef cooks."
  },
  {
    "korean": "닭",
    "english": "chicken",
    "example_ko": "닭이 울어요.",
    "example_en": "The chicken is crowing."
  },
  {
    "korean": "아이",
    "english": "child",
    "example_ko": "아이가 놀고 있어요.",
    "example_en": "The child is playing."
  },
  {
    "korean": "중식",
    "english": "Chinese food",
    "example_ko": "중식을 시켰어요.",
    "example_en": "I ordered Chinese food."
  },
  {
    "korean": "초콜릿",
    "english": "chocolate",
    "example_ko": "초콜릿은 달콤해요.",
    "example_en": "Chocolate is sweet."
  },
  {
    "korean": "젓가락",
    "english": "chopsticks",
    "example_ko": "젓가락을 잘 써요.",
    "example_en": "I use chopsticks well."
  },
  {
    "korean": "추석",
    "english": "Chuseok",
    "example_ko": "추석에는 송편을 먹어요.",
    "example_en": "We eat rice cakes on Chuseok."
  },
  {
    "korean": "영화관",
    "english": "cinema",
    "example_ko": "영화관에 갔어요.",
    "example_en": "I went to the cinema."
  },
  {
    "korean": "시민",
    "english": "citizen",
    "example_ko": "시민들이 모였어요.",
    "example_en": "Citizens gathered."
  },
  {
    "korean": "도시",
    "english": "city",
    "example_ko": "서울은 큰 도시예요.",
    "example_en": "Seoul is a big city."
  },
  {
    "korean": "수업",
    "english": "class",
    "example_ko": "수업이 재미있어요.",
    "example_en": "The class is interesting."
  },
  {
    "korean": "반",
    "english": "class/group",
    "example_ko": "우리 반이 좋아요.",
    "example_en": "I like my class."
  },
  {
    "korean": "수업",
    "english": "class/lesson",
    "example_ko": "수업이 시작됐어요.",
    "example_en": "The class has started."
  },
  {
    "korean": "동기",
    "english": "classmate",
    "example_ko": "동기와 친해요.",
    "example_en": "I am close with my classmates."
  },
  {
    "korean": "교실",
    "english": "classroom",
    "example_ko": "교실이 깨끗해요.",
    "example_en": "The classroom is clean."
  },
  {
    "korean": "청소",
    "english": "cleaning",
    "example_ko": "집 청소를 했어요.",
    "example_en": "I cleaned the house."
  },
  {
    "korean": "점원",
    "english": "clerk",
    "example_ko": "점원이 친절해요.",
    "example_en": "The clerk is kind."
  },
  {
    "korean": "기후",
    "english": "climate",
    "example_ko": "기후가 변했어요.",
    "example_en": "The climate has changed."
  },
  {
    "korean": "시계",
    "english": "clock/watch",
    "example_ko": "시계를 샀어요.",
    "example_en": "I bought a watch."
  },
  {
    "korean": "옷",
    "english": "clothes",
    "example_ko": "새 옷을 샀어요.",
    "example_en": "I bought new clothes."
  },
  {
    "korean": "구름",
    "english": "cloud",
    "example_ko": "구름이 많아요.",
    "example_en": "There are many clouds."
  },
  {
    "korean": "동아리",
    "english": "club",
    "example_ko": "동아리에 가입했어요.",
    "example_en": "I joined a club."
  },
  {
    "korean": "동아리활동",
    "english": "club activity",
    "example_ko": "동아리활동을 했어요.",
    "example_en": "I participated in club activities."
  },
  {
    "korean": "커피",
    "english": "coffee",
    "example_ko": "아침에 커피를 마시는 게 습관이에요.",
    "example_en": "Drinking coffee in the morning is my habit."
  },
  {
    "korean": "감기",
    "english": "cold (illness)",
    "example_ko": "감기에 걸렸어요.",
    "example_en": "I caught a cold."
  },
  {
    "korean": "동료",
    "english": "colleague",
    "example_ko": "좋은 동료가 있어요.",
    "example_en": "I have good colleagues."
  },
  {
    "korean": "회사",
    "english": "company",
    "example_ko": "큰 회사에서 일해요.",
    "example_en": "I work at a big company."
  },
  {
    "korean": "회식",
    "english": "company dinner",
    "example_ko": "오늘은 회식이 있어요.",
    "example_en": "We have a company dinner today."
  },
  {
    "korean": "컴퓨터",
    "english": "computer",
    "example_ko": "컴퓨터로 숙제를 했어요.",
    "example_en": "I did my homework on the computer."
  },
  {
    "korean": "집중",
    "english": "concentration",
    "example_ko": "공부에 집중하세요.",
    "example_en": "Concentrate on studying."
  },
  {
    "korean": "콘서트",
    "english": "concert",
    "example_ko": "콘서트가 즐거웠어요.",
    "example_en": "The concert was fun."
  },
  {
    "korean": "소비",
    "english": "consumption",
    "example_ko": "소비가 많아요.",
    "example_en": "Consumption is high."
  },
  {
    "korean": "연락처",
    "english": "contact info",
    "example_ko": "연락처를 공유했어요.",
    "example_en": "I shared my contact information."
  },
  {
    "korean": "콘택트렌즈",
    "english": "contact lenses",
    "example_ko": "콘택트렌즈를 착용해요.",
    "example_en": "I wear contact lenses."
  },
  {
    "korean": "계약",
    "english": "contract",
    "example_ko": "계약을 체결했어요.",
    "example_en": "We signed a contract."
  },
  {
    "korean": "계약서",
    "english": "contract document",
    "example_ko": "계약서에 서명했어요.",
    "example_en": "I signed the contract."
  },
  {
    "korean": "요리",
    "english": "cooking",
    "example_ko": "요리를 잘해요.",
    "example_en": "I’m good at cooking."
  },
  {
    "korean": "식용유",
    "english": "cooking oil",
    "example_ko": "식용유를 사용했어요.",
    "example_en": "I used cooking oil."
  },
  {
    "korean": "복사기",
    "english": "copier",
    "example_ko": "복사기로 문서를 복사했어요.",
    "example_en": "I copied documents using the copier."
  },
  {
    "korean": "복사",
    "english": "copy",
    "example_ko": "문서를 복사했어요.",
    "example_en": "I copied the document."
  },
  {
    "korean": "물가",
    "english": "cost of living",
    "example_ko": "물가가 올랐어요.",
    "example_en": "The cost of living has increased."
  },
  {
    "korean": "기침",
    "english": "cough",
    "example_ko": "기침이 심해요.",
    "example_en": "I have a bad cough."
  },
  {
    "korean": "상담",
    "english": "counseling",
    "example_ko": "상담을 받았어요.",
    "example_en": "I received counseling."
  },
  {
    "korean": "택배",
    "english": "courier/delivery",
    "example_ko": "택배가 도착했어요.",
    "example_en": "The delivery arrived."
  },
  {
    "korean": "사촌",
    "english": "cousin",
    "example_ko": "사촌과 놀았어요.",
    "example_en": "I played with my cousin."
  },
  {
    "korean": "소",
    "english": "cow",
    "example_ko": "소가 풀을 먹어요.",
    "example_en": "The cow is eating grass."
  },
  {
    "korean": "신용카드",
    "english": "credit card",
    "example_ko": "신용카드를 사용해요.",
    "example_en": "I use a credit card."
  },
  {
    "korean": "횡단보도",
    "english": "crosswalk",
    "example_ko": "횡단보도를 건넜어요.",
    "example_en": "I crossed the crosswalk."
  },
  {
    "korean": "문화",
    "english": "culture",
    "example_ko": "문화 차이를 이해해요.",
    "example_en": "I understand cultural differences."
  },
  {
    "korean": "컵",
    "english": "cup",
    "example_ko": "컵에 물을 따랐어요.",
    "example_en": "I poured water into a cup."
  },
  {
    "korean": "물컵",
    "english": "cup of water",
    "example_ko": "물컵을 가져왔어요.",
    "example_en": "I brought a cup of water."
  },
  {
    "korean": "환전",
    "english": "currency exchange",
    "example_ko": "공항에서 환전했어요.",
    "example_en": "I exchanged currency at the airport."
  },
  {
    "korean": "커튼",
    "english": "curtain",
    "example_ko": "커튼을 닫았어요.",
    "example_en": "I closed the curtains."
  },
  {
    "korean": "고객",
    "english": "customer",
    "example_ko": "고객의 요구를 들었어요.",
    "example_en": "I listened to the customer's requests."
  },
  {
    "korean": "손님",
    "english": "customer/guest",
    "example_ko": "손님이 많아요.",
    "example_en": "There are many customers."
  },
  {
    "korean": "세관",
    "english": "customs",
    "example_ko": "세관 검사를 받았어요.",
    "example_en": "I went through customs inspection."
  },
  {
    "korean": "자르다",
    "english": "cut",
    "example_ko": "고기를 잘랐어요.",
    "example_en": "I cut the meat."
  },
  {
    "korean": "춤",
    "english": "dance",
    "example_ko": "춤을 배우고 있어요.",
    "example_en": "I'm learning to dance."
  },
  {
    "korean": "데이터",
    "english": "data",
    "example_ko": "데이터를 저장했어요.",
    "example_en": "I saved the data."
  },
  {
    "korean": "자료",
    "english": "data/material",
    "example_ko": "자료를 준비했어요.",
    "example_en": "I prepared the materials."
  },
  {
    "korean": "딸",
    "english": "daughter",
    "example_ko": "딸이 노래했어요.",
    "example_en": "My daughter sang."
  },
  {
    "korean": "요일",
    "english": "day of the week",
    "example_ko": "요일을 외웠어요.",
    "example_en": "I memorized the days of the week."
  },
  {
    "korean": "토론",
    "english": "debate/discussion",
    "example_ko": "토론을 했어요.",
    "example_en": "We had a discussion."
  },
  {
    "korean": "지연",
    "english": "delay",
    "example_ko": "비행기가 지연됐어요.",
    "example_en": "The flight was delayed."
  },
  {
    "korean": "삭제",
    "english": "delete",
    "example_ko": "메시지를 삭제했어요.",
    "example_en": "I deleted the message."
  },
  {
    "korean": "맛있다",
    "english": "delicious",
    "example_ko": "음식이 맛있어요.",
    "example_en": "The food is delicious."
  },
  {
    "korean": "배달",
    "english": "delivery",
    "example_ko": "음식 배달을 시켰어요.",
    "example_en": "I ordered food delivery."
  },
  {
    "korean": "치과",
    "english": "dental clinic",
    "example_ko": "치과에 갔어요.",
    "example_en": "I went to the dentist."
  },
  {
    "korean": "치과의사",
    "english": "dentist",
    "example_ko": "치과의사에게 진료받았어요.",
    "example_en": "I received treatment from the dentist."
  },
  {
    "korean": "백화점",
    "english": "department store",
    "example_ko": "백화점에서 옷을 샀어요.",
    "example_en": "I bought clothes at the department store."
  },
  {
    "korean": "학과",
    "english": "department/major",
    "example_ko": "컴퓨터학과에 다녀요.",
    "example_en": "I attend the computer department."
  },
  {
    "korean": "출발",
    "english": "departure",
    "example_ko": "출발 시간이 다가와요.",
    "example_en": "Departure time is approaching."
  },
  {
    "korean": "출국",
    "english": "departure (from a country)",
    "example_ko": "출국 수속을 했어요.",
    "example_en": "I completed departure procedures."
  },
  {
    "korean": "보증금",
    "english": "deposit",
    "example_ko": "보증금을 냈어요.",
    "example_en": "I paid a deposit."
  },
  {
    "korean": "책상",
    "english": "desk",
    "example_ko": "책상 위에 책이 있어요.",
    "example_en": "There’s a book on the desk."
  },
  {
    "korean": "디저트",
    "english": "dessert",
    "example_ko": "디저트를 먹었어요.",
    "example_en": "I ate dessert."
  },
  {
    "korean": "목적지",
    "english": "destination",
    "example_ko": "목적지에 도착했어요.",
    "example_en": "I arrived at the destination."
  },
  {
    "korean": "진단",
    "english": "diagnosis",
    "example_ko": "진단을 받았어요.",
    "example_en": "I got a diagnosis."
  },
  {
    "korean": "식단",
    "english": "diet",
    "example_ko": "식단을 관리해요.",
    "example_en": "I manage my diet."
  },
  {
    "korean": "소화",
    "english": "digestion",
    "example_ko": "소화가 잘 안 돼요.",
    "example_en": "My digestion is not good."
  },
  {
    "korean": "식당",
    "english": "dining room/restaurant",
    "example_ko": "식당에서 밥을 먹었어요.",
    "example_en": "I ate at the restaurant."
  },
  {
    "korean": "식탁",
    "english": "dining table",
    "example_ko": "식탁 위에 음식이 있어요.",
    "example_en": "There is food on the dining table."
  },
  {
    "korean": "밥상",
    "english": "dining table (for meals)",
    "example_ko": "밥상에 앉았어요.",
    "example_en": "I sat at the dining table."
  },
  {
    "korean": "저녁",
    "english": "dinner",
    "example_ko": "저녁에 고기를 구웠어요.",
    "example_en": "We grilled meat for dinner."
  },
  {
    "korean": "저녁",
    "english": "dinner/evening",
    "example_ko": "저녁을 먹었어요.",
    "example_en": "I ate dinner."
  },
  {
    "korean": "졸업장",
    "english": "diploma",
    "example_ko": "졸업장을 받았어요.",
    "example_en": "I received a diploma."
  },
  {
    "korean": "방향",
    "english": "direction",
    "example_ko": "방향을 물어봤어요.",
    "example_en": "I asked for directions."
  },
  {
    "korean": "장애인",
    "english": "disabled person",
    "example_ko": "장애인을 도왔어요.",
    "example_en": "I helped a disabled person."
  },
  {
    "korean": "재난",
    "english": "disaster",
    "example_ko": "재난 대비가 필요해요.",
    "example_en": "Disaster preparedness is needed."
  },
  {
    "korean": "퇴원",
    "english": "discharge (from hospital)",
    "example_ko": "퇴원했어요.",
    "example_en": "I was discharged."
  },
  {
    "korean": "할인",
    "english": "discount",
    "example_ko": "할인을 받았어요.",
    "example_en": "I got a discount."
  },
  {
    "korean": "토론",
    "english": "discussion/debate",
    "example_ko": "토론을 했어요.",
    "example_en": "We had a discussion."
  },
  {
    "korean": "질병",
    "english": "disease",
    "example_ko": "질병에 걸렸어요.",
    "example_en": "I caught a disease."
  },
  {
    "korean": "병",
    "english": "disease/illness",
    "example_ko": "병에 걸렸어요.",
    "example_en": "I got sick."
  },
  {
    "korean": "이혼",
    "english": "divorce",
    "example_ko": "이혼했어요.",
    "example_en": "I got divorced."
  },
  {
    "korean": "의사",
    "english": "doctor",
    "example_ko": "의사에게 진찰을 받았어요.",
    "example_en": "I got a check-up from the doctor."
  },
  {
    "korean": "서류",
    "english": "document",
    "example_ko": "서류를 제출했어요.",
    "example_en": "I submitted the documents."
  },
  {
    "korean": "강아지",
    "english": "dog",
    "example_ko": "강아지가 너무 활발해요.",
    "example_en": "The puppy is very active."
  },
  {
    "korean": "국내",
    "english": "domestic",
    "example_ko": "국내 여행을 갔어요.",
    "example_en": "I went on a domestic trip."
  },
  {
    "korean": "문",
    "english": "door",
    "example_ko": "문을 열었어요.",
    "example_en": "I opened the door."
  },
  {
    "korean": "다운로드",
    "english": "download",
    "example_ko": "파일을 다운로드했어요.",
    "example_en": "I downloaded the file."
  },
  {
    "korean": "도심",
    "english": "downtown/city center",
    "example_ko": "도심을 걸었어요.",
    "example_en": "I walked downtown."
  },
  {
    "korean": "드라마",
    "english": "drama",
    "example_ko": "드라마를 좋아해요.",
    "example_en": "I like dramas."
  },
  {
    "korean": "꿈",
    "english": "dream",
    "example_ko": "어젯밤에 이상한 꿈을 꿨어요.",
    "example_en": "I had a strange dream last night."
  },
  {
    "korean": "마시다",
    "english": "drink",
    "example_ko": "물을 마셨어요.",
    "example_en": "I drank water."
  },
  {
    "korean": "운전사",
    "english": "driver",
    "example_ko": "운전사가 운전해요.",
    "example_en": "The driver drives."
  },
  {
    "korean": "운전",
    "english": "driving",
    "example_ko": "운전을 배워요.",
    "example_en": "I am learning to drive."
  },
  {
    "korean": "약물",
    "english": "drug/medicine",
    "example_ko": "약물을 복용해요.",
    "example_en": "I take medicine."
  },
  {
    "korean": "드럼",
    "english": "drums",
    "example_ko": "드럼을 배우고 있어요.",
    "example_en": "I’m learning to play the drums."
  },
  {
    "korean": "근무",
    "english": "duty/work",
    "example_ko": "오늘 근무 시간이 길었어요.",
    "example_en": "The working hours were long today."
  },
  {
    "korean": "이어폰",
    "english": "earphones",
    "example_ko": "이어폰을 샀어요.",
    "example_en": "I bought earphones."
  },
  {
    "korean": "귀걸이",
    "english": "earrings",
    "example_ko": "귀걸이를 샀어요.",
    "example_en": "I bought earrings."
  },
  {
    "korean": "지구",
    "english": "Earth",
    "example_ko": "지구는 우리가 살아가는 곳이에요.",
    "example_en": "Earth is where we live."
  },
  {
    "korean": "먹다",
    "english": "eat",
    "example_ko": "밥을 먹었어요.",
    "example_en": "I ate rice."
  },
  {
    "korean": "음식점",
    "english": "eatery/restaurant",
    "example_ko": "음식점에서 식사했어요.",
    "example_en": "I ate at a restaurant."
  },
  {
    "korean": "경제학",
    "english": "economics",
    "example_ko": "경제학을 전공했어요.",
    "example_en": "I majored in economics."
  },
  {
    "korean": "경제",
    "english": "economy",
    "example_ko": "경제가 좋아졌어요.",
    "example_en": "The economy has improved."
  },
  {
    "korean": "편집",
    "english": "edit",
    "example_ko": "사진을 편집했어요.",
    "example_en": "I edited the photo."
  },
  {
    "korean": "교육",
    "english": "education",
    "example_ko": "교육이 중요해요.",
    "example_en": "Education is important."
  },
  {
    "korean": "노력",
    "english": "effort",
    "example_ko": "노력을 했어요.",
    "example_en": "I made an effort."
  },
  {
    "korean": "달걀",
    "english": "egg",
    "example_ko": "아침에 달걀을 먹었어요.",
    "example_en": "I ate eggs in the morning."
  },
  {
    "korean": "전기",
    "english": "electricity",
    "example_ko": "전기가 나갔어요.",
    "example_en": "The electricity went out."
  },
  {
    "korean": "전기세",
    "english": "electricity bill",
    "example_ko": "전기세가 비싸요.",
    "example_en": "The electricity bill is expensive."
  },
  {
    "korean": "엘리베이터",
    "english": "elevator",
    "example_ko": "엘리베이터를 탔어요.",
    "example_en": "I took the elevator."
  },
  {
    "korean": "이메일",
    "english": "email",
    "example_ko": "이메일을 확인했어요.",
    "example_en": "I checked my email."
  },
  {
    "korean": "대사관",
    "english": "embassy",
    "example_ko": "대사관에 갔어요.",
    "example_en": "I went to the embassy."
  },
  {
    "korean": "긴급",
    "english": "emergency",
    "example_ko": "긴급 상황이에요.",
    "example_en": "This is an emergency."
  },
  {
    "korean": "비상구",
    "english": "emergency exit",
    "example_ko": "비상구를 찾았어요.",
    "example_en": "I found the emergency exit."
  },
  {
    "korean": "응급실",
    "english": "emergency room",
    "example_ko": "응급실에 갔어요.",
    "example_en": "I went to the emergency room."
  },
  {
    "korean": "직원",
    "english": "employee",
    "example_ko": "직원들이 열심히 일해요.",
    "example_en": "Employees work hard."
  },
  {
    "korean": "취업",
    "english": "employment",
    "example_ko": "취업 준비 중이에요.",
    "example_en": "I’m preparing for employment."
  },
  {
    "korean": "에너지",
    "english": "energy",
    "example_ko": "에너지를 절약해야 해요.",
    "example_en": "We should save energy."
  },
  {
    "korean": "기술자",
    "english": "engineer",
    "example_ko": "기술자가 문제를 해결해요.",
    "example_en": "The engineer solves problems."
  },
  {
    "korean": "입구",
    "english": "entrance",
    "example_ko": "입구에서 기다렸어요.",
    "example_en": "I waited at the entrance."
  },
  {
    "korean": "입국",
    "english": "entry (into a country)",
    "example_ko": "입국 심사를 받았어요.",
    "example_en": "I went through immigration."
  },
  {
    "korean": "봉투",
    "english": "envelope",
    "example_ko": "편지를 봉투에 넣었어요.",
    "example_en": "I put the letter in an envelope."
  },
  {
    "korean": "환경",
    "english": "environment",
    "example_ko": "환경을 보호합시다.",
    "example_en": "Let’s protect the environment."
  },
  {
    "korean": "장비",
    "english": "equipment",
    "example_ko": "장비를 새로 구입했어요.",
    "example_en": "We purchased new equipment."
  },
  {
    "korean": "지우개",
    "english": "eraser",
    "example_ko": "지우개를 썼어요.",
    "example_en": "I used an eraser."
  },
  {
    "korean": "저녁",
    "english": "evening/dinner",
    "example_ko": "저녁을 준비했어요.",
    "example_en": "I prepared dinner."
  },
  {
    "korean": "행사",
    "english": "event",
    "example_ko": "행사가 취소됐어요.",
    "example_en": "The event was canceled."
  },
  {
    "korean": "행사장",
    "english": "event hall",
    "example_ko": "행사장에 도착했어요.",
    "example_en": "I arrived at the event hall."
  },
  {
    "korean": "시험",
    "english": "exam",
    "example_ko": "내일 시험이 있어요.",
    "example_en": "I have an exam tomorrow."
  },
  {
    "korean": "검사",
    "english": "examination/test",
    "example_ko": "검사를 받았어요.",
    "example_en": "I had a test."
  },
  {
    "korean": "환율",
    "english": "exchange rate",
    "example_ko": "환율이 변했어요.",
    "example_en": "The exchange rate changed."
  },
  {
    "korean": "교환학기",
    "english": "exchange semester",
    "example_ko": "교환학기를 다녀왔어요.",
    "example_en": "I went on an exchange semester."
  },
  {
    "korean": "교환학생",
    "english": "exchange student",
    "example_ko": "교환학생이 왔어요.",
    "example_en": "An exchange student came."
  },
  {
    "korean": "운동",
    "english": "exercise",
    "example_ko": "건강을 위해 매일 운동해요.",
    "example_en": "I exercise every day for my health."
  },
  {
    "korean": "전시회",
    "english": "exhibition",
    "example_ko": "전시회에 참석했어요.",
    "example_en": "I attended an exhibition."
  },
  {
    "korean": "출구",
    "english": "exit",
    "example_ko": "출구로 나갔어요.",
    "example_en": "I went out the exit."
  },
  {
    "korean": "지출",
    "english": "expenditure",
    "example_ko": "지출을 줄였어요.",
    "example_en": "I reduced expenditures."
  },
  {
    "korean": "경험",
    "english": "experience",
    "example_ko": "좋은 경험이에요.",
    "example_en": "It’s a good experience."
  },
  {
    "korean": "실험",
    "english": "experiment",
    "example_ko": "실험을 했어요.",
    "example_en": "I did an experiment."
  },
  {
    "korean": "설명",
    "english": "explanation",
    "example_ko": "설명을 들었어요.",
    "example_en": "I heard an explanation."
  },
  {
    "korean": "박람회",
    "english": "expo/fair",
    "example_ko": "박람회에 참가했어요.",
    "example_en": "I participated in an expo."
  },
  {
    "korean": "수출",
    "english": "export",
    "example_ko": "수출을 했어요.",
    "example_en": "I exported goods."
  },
  {
    "korean": "눈",
    "english": "eye/snow",
    "example_ko": "눈이 내렸어요.",
    "example_en": "It snowed."
  },
  {
    "korean": "시력",
    "english": "eyesight",
    "example_ko": "시력이 나빠요.",
    "example_en": "My eyesight is bad."
  },
  {
    "korean": "얼굴",
    "english": "face",
    "example_ko": "얼굴이 예뻐요.",
    "example_en": "The face is pretty."
  },
  {
    "korean": "공장",
    "english": "factory",
    "example_ko": "공장에서 일했어요.",
    "example_en": "I worked at a factory."
  },
  {
    "korean": "실패",
    "english": "failure",
    "example_ko": "실패했어요.",
    "example_en": "I failed."
  },
  {
    "korean": "가족",
    "english": "family",
    "example_ko": "가족과 함께 시간을 보내는 게 좋아요.",
    "example_en": "I like spending time with my family."
  },
  {
    "korean": "가족 모임",
    "english": "family gathering",
    "example_ko": "가족 모임을 했어요.",
    "example_en": "We had a family gathering."
  },
  {
    "korean": "가족사진",
    "english": "family photo",
    "example_ko": "가족사진을 찍었어요.",
    "example_en": "I took a family photo."
  },
  {
    "korean": "선풍기",
    "english": "fan",
    "example_ko": "선풍기를 틀었어요.",
    "example_en": "I turned on the fan."
  },
  {
    "korean": "아버지",
    "english": "father",
    "example_ko": "아버지가 일하셨어요.",
    "example_en": "My father worked."
  },
  {
    "korean": "피로",
    "english": "fatigue",
    "example_ko": "피로가 많이 쌓였어요.",
    "example_en": "I’m very tired."
  },
  {
    "korean": "팩스",
    "english": "fax",
    "example_ko": "팩스를 보냈어요.",
    "example_en": "I sent a fax."
  },
  {
    "korean": "축제",
    "english": "festival",
    "example_ko": "축제가 열렸어요.",
    "example_en": "A festival was held."
  },
  {
    "korean": "열",
    "english": "fever",
    "example_ko": "열이 나요.",
    "example_en": "I have a fever."
  },
  {
    "korean": "발열",
    "english": "fever (formal)",
    "example_ko": "발열 증상이 있어요.",
    "example_en": "There is a fever symptom."
  },
  {
    "korean": "파일",
    "english": "file",
    "example_ko": "파일을 삭제했어요.",
    "example_en": "I deleted the file."
  },
  {
    "korean": "금융",
    "english": "finance",
    "example_ko": "금융 공부를 해요.",
    "example_en": "I study finance."
  },
  {
    "korean": "불",
    "english": "fire",
    "example_ko": "불이 켜져 있어요.",
    "example_en": "The fire is on."
  },
  {
    "korean": "소방서",
    "english": "fire station",
    "example_ko": "소방서에 전화했어요.",
    "example_en": "I called the fire station."
  },
  {
    "korean": "소방관",
    "english": "firefighter",
    "example_ko": "소방관이 불을 껐어요.",
    "example_en": "The firefighter put out the fire."
  },
  {
    "korean": "응급처치",
    "english": "first aid",
    "example_ko": "응급처치를 했어요.",
    "example_en": "I gave first aid."
  },
  {
    "korean": "물고기",
    "english": "fish (animal)",
    "example_ko": "물고기가 헤엄쳐요.",
    "example_en": "The fish is swimming."
  },
  {
    "korean": "생선",
    "english": "fish (food)",
    "example_ko": "생선을 샀어요.",
    "example_en": "I bought fish."
  },
  {
    "korean": "비행기표",
    "english": "flight ticket",
    "example_ko": "비행기표를 받았어요.",
    "example_en": "I received the flight ticket."
  },
  {
    "korean": "바닥",
    "english": "floor",
    "example_ko": "바닥이 깨끗해요.",
    "example_en": "The floor is clean."
  },
  {
    "korean": "꽃",
    "english": "flower",
    "example_ko": "꽃을 샀어요.",
    "example_en": "I bought flowers."
  },
  {
    "korean": "독감",
    "english": "flu",
    "example_ko": "독감 예방주사를 맞았어요.",
    "example_en": "I got a flu shot."
  },
  {
    "korean": "플루트",
    "english": "flute",
    "example_ko": "플루트를 불어요.",
    "example_en": "I play the flute."
  },
  {
    "korean": "폴더",
    "english": "folder",
    "example_ko": "폴더를 만들었어요.",
    "example_en": "I created a folder."
  },
  {
    "korean": "음식",
    "english": "food",
    "example_ko": "한국 음식은 정말 맛있어요.",
    "example_en": "Korean food is really delicious."
  },
  {
    "korean": "숲",
    "english": "forest",
    "example_ko": "숲 속을 걸었어요.",
    "example_en": "I walked in the forest."
  },
  {
    "korean": "포크",
    "english": "fork",
    "example_ko": "포크로 스파게티를 먹었어요.",
    "example_en": "I ate spaghetti with a fork."
  },
  {
    "korean": "구두",
    "english": "formal shoes",
    "example_ko": "구두를 닦았어요.",
    "example_en": "I polished my shoes."
  },
  {
    "korean": "냉동실",
    "english": "freezer",
    "example_ko": "냉동실에 얼음이 있어요.",
    "example_en": "There is ice in the freezer."
  },
  {
    "korean": "신선하다",
    "english": "fresh",
    "example_ko": "과일이 신선해요.",
    "example_en": "The fruit is fresh."
  },
  {
    "korean": "금요일",
    "english": "Friday",
    "example_ko": "금요일은 영화 보는 날이에요.",
    "example_en": "Friday is movie night."
  },
  {
    "korean": "친구",
    "english": "friend",
    "example_ko": "친구와 함께 여행을 가고 싶어요.",
    "example_en": "I want to travel with my friend."
  },
  {
    "korean": "친구 관계",
    "english": "friendship",
    "example_ko": "친구 관계가 좋아요.",
    "example_en": "The friendship is good."
  },
  {
    "korean": "과일",
    "english": "fruit",
    "example_ko": "과일은 건강에 좋아요.",
    "example_en": "Fruit is good for your health."
  },
  {
    "korean": "프라이팬",
    "english": "frying pan",
    "example_ko": "프라이팬에 계란을 부쳤어요.",
    "example_en": "I fried eggs in the frying pan."
  },
  {
    "korean": "배부르다",
    "english": "full (after eating)",
    "example_ko": "배가 부릅니다.",
    "example_en": "I am full."
  },
  {
    "korean": "가구",
    "english": "furniture",
    "example_ko": "새 가구를 샀어요.",
    "example_en": "I bought new furniture."
  },
  {
    "korean": "게임",
    "english": "game",
    "example_ko": "게임을 너무 많이 했어요.",
    "example_en": "I played too many games."
  },
  {
    "korean": "차고",
    "english": "garage",
    "example_ko": "차고에 차가 있어요.",
    "example_en": "There is a car in the garage."
  },
  {
    "korean": "정원",
    "english": "garden",
    "example_ko": "정원에 꽃이 있어요.",
    "example_en": "There are flowers in the garden."
  },
  {
    "korean": "가스",
    "english": "gas",
    "example_ko": "가스를 켰어요.",
    "example_en": "I turned on the gas."
  },
  {
    "korean": "가스비",
    "english": "gas bill",
    "example_ko": "가스비를 줄였어요.",
    "example_en": "I reduced the gas bill."
  },
  {
    "korean": "모임",
    "english": "gathering",
    "example_ko": "모임을 준비했어요.",
    "example_en": "I prepared for the gathering."
  },
  {
    "korean": "병균",
    "english": "germ",
    "example_ko": "병균을 조심하세요.",
    "example_en": "Be careful of germs."
  },
  {
    "korean": "선물",
    "english": "gift",
    "example_ko": "친구에게 선물을 줬어요.",
    "example_en": "I gave a gift to my friend."
  },
  {
    "korean": "안경",
    "english": "glasses",
    "example_ko": "안경을 새로 샀어요.",
    "example_en": "I bought new glasses."
  },
  {
    "korean": "장갑",
    "english": "gloves",
    "example_ko": "장갑을 꼈어요.",
    "example_en": "I put on gloves."
  },
  {
    "korean": "풀",
    "english": "glue",
    "example_ko": "풀로 붙였어요.",
    "example_en": "I glued it together."
  },
  {
    "korean": "목표",
    "english": "goal",
    "example_ko": "목표를 달성했어요.",
    "example_en": "I achieved the goal."
  },
  {
    "korean": "출근",
    "english": "going to work",
    "example_ko": "아침 8시에 출근해요.",
    "example_en": "I go to work at 8 a.m."
  },
  {
    "korean": "정부",
    "english": "government",
    "example_ko": "정부가 정책을 발표했어요.",
    "example_en": "The government announced a policy."
  },
  {
    "korean": "성적",
    "english": "grade/result",
    "example_ko": "성적이 좋아요.",
    "example_en": "The grades are good."
  },
  {
    "korean": "학년",
    "english": "grade/year",
    "example_ko": "저는 2학년이에요.",
    "example_en": "I am in the second grade/year."
  },
  {
    "korean": "졸업생",
    "english": "graduate",
    "example_ko": "졸업생들이 모였어요.",
    "example_en": "Graduates gathered."
  },
  {
    "korean": "졸업",
    "english": "graduation",
    "example_ko": "내년에 졸업해요.",
    "example_en": "I will graduate next year."
  },
  {
    "korean": "졸업식",
    "english": "graduation ceremony",
    "example_ko": "졸업식에 참석했어요.",
    "example_en": "I attended the graduation ceremony."
  },
  {
    "korean": "할아버지",
    "english": "grandfather",
    "example_ko": "할아버지께서 이야기해 주셨어요.",
    "example_en": "My grandfather told a story."
  },
  {
    "korean": "할머니",
    "english": "grandmother",
    "example_ko": "할머니가 집에 계세요.",
    "example_en": "My grandmother is at home."
  },
  {
    "korean": "풀",
    "english": "grass",
    "example_ko": "풀이 푸르러워요.",
    "example_en": "The grass is green."
  },
  {
    "korean": "굽다",
    "english": "grill/bake",
    "example_ko": "고기를 구웠어요.",
    "example_en": "I grilled meat."
  },
  {
    "korean": "땅",
    "english": "ground/soil",
    "example_ko": "땅이 젖었어요.",
    "example_en": "The ground is wet."
  },
  {
    "korean": "가이드",
    "english": "guide",
    "example_ko": "가이드와 함께 갔어요.",
    "example_en": "I went with a guide."
  },
  {
    "korean": "안내",
    "english": "guide/information",
    "example_ko": "안내를 받았어요.",
    "example_en": "I received guidance."
  },
  {
    "korean": "안내서",
    "english": "guidebook",
    "example_ko": "안내서를 읽었어요.",
    "example_en": "I read the guidebook."
  },
  {
    "korean": "기타",
    "english": "guitar",
    "example_ko": "기타 소리가 좋아요.",
    "example_en": "I like the sound of the guitar."
  },
  {
    "korean": "체육관",
    "english": "gym",
    "example_ko": "체육관에 등록했어요.",
    "example_en": "I signed up at the gym."
  },
  {
    "korean": "복도",
    "english": "hallway",
    "example_ko": "복도가 길어요.",
    "example_en": "The hallway is long."
  },
  {
    "korean": "햄버거",
    "english": "hamburger",
    "example_ko": "햄버거를 먹었어요.",
    "example_en": "I ate a hamburger."
  },
  {
    "korean": "손",
    "english": "hand",
    "example_ko": "손을 씻었어요.",
    "example_en": "I washed my hands."
  },
  {
    "korean": "하드웨어",
    "english": "hardware",
    "example_ko": "컴퓨터 하드웨어를 업그레이드했어요.",
    "example_en": "I upgraded computer hardware."
  },
  {
    "korean": "모자",
    "english": "hat",
    "example_ko": "모자를 써요.",
    "example_en": "I’m wearing a hat."
  },
  {
    "korean": "머리",
    "english": "head/hair",
    "example_ko": "머리를 잘랐어요.",
    "example_en": "I cut my hair."
  },
  {
    "korean": "두통",
    "english": "headache",
    "example_ko": "두통이 있어요.",
    "example_en": "I have a headache."
  },
  {
    "korean": "헤드폰",
    "english": "headphones",
    "example_ko": "헤드폰을 썼어요.",
    "example_en": "I wore headphones."
  },
  {
    "korean": "건강",
    "english": "health",
    "example_ko": "건강을 챙기세요.",
    "example_en": "Take care of your health."
  },
  {
    "korean": "건강식",
    "english": "health food",
    "example_ko": "건강식을 먹어요.",
    "example_en": "I eat health food."
  },
  {
    "korean": "건강보험",
    "english": "health insurance",
    "example_ko": "건강보험에 가입했어요.",
    "example_en": "I signed up for health insurance."
  },
  {
    "korean": "건강식",
    "english": "healthy food",
    "example_ko": "건강식을 먹어요.",
    "example_en": "I eat healthy food."
  },
  {
    "korean": "난방",
    "english": "heating",
    "example_ko": "난방이 잘 돼요.",
    "example_en": "The heating works well."
  },
  {
    "korean": "도움",
    "english": "help",
    "example_ko": "도움을 요청했어요.",
    "example_en": "I asked for help."
  },
  {
    "korean": "고속도로",
    "english": "highway",
    "example_ko": "고속도로를 달렸어요.",
    "example_en": "I drove on the highway."
  },
  {
    "korean": "역사",
    "english": "history",
    "example_ko": "한국의 역사를 공부해요.",
    "example_en": "I study Korean history."
  },
  {
    "korean": "휴일",
    "english": "holiday",
    "example_ko": "휴일에는 여행 가요.",
    "example_en": "I travel on holidays."
  },
  {
    "korean": "집",
    "english": "home",
    "example_ko": "집에 있어요.",
    "example_en": "I’m at home."
  },
  {
    "korean": "숙제",
    "english": "homework",
    "example_ko": "숙제를 끝냈어요.",
    "example_en": "I finished my homework."
  },
  {
    "korean": "말",
    "english": "horse",
    "example_ko": "말을 탔어요.",
    "example_en": "I rode a horse."
  },
  {
    "korean": "병원",
    "english": "hospital",
    "example_ko": "몸이 아파서 병원에 갔어요.",
    "example_en": "I went to the hospital because I was sick."
  },
  {
    "korean": "병실",
    "english": "hospital room",
    "example_ko": "병실에 누워 있어요.",
    "example_en": "I am lying in the hospital room."
  },
  {
    "korean": "입원",
    "english": "hospitalization",
    "example_ko": "입원했어요.",
    "example_en": "I was hospitalized."
  },
  {
    "korean": "호텔",
    "english": "hotel",
    "example_ko": "호텔에서 묵었어요.",
    "example_en": "I stayed at a hotel."
  },
  {
    "korean": "집",
    "english": "house/home",
    "example_ko": "집에 돌아왔어요.",
    "example_en": "I came back home."
  },
  {
    "korean": "인사",
    "english": "human resources",
    "example_ko": "인사 부서에 연락했어요.",
    "example_en": "I contacted the HR department."
  },
  {
    "korean": "습도",
    "english": "humidity",
    "example_ko": "습도가 높아서 덥게 느껴져요.",
    "example_en": "It feels hot because of the high humidity."
  },
  {
    "korean": "배고프다",
    "english": "hungry",
    "example_ko": "배가 고파요.",
    "example_en": "I am hungry."
  },
  {
    "korean": "아이스크림",
    "english": "ice cream",
    "example_ko": "아이스크림을 사 먹었어요.",
    "example_en": "I bought and ate ice cream."
  },
  {
    "korean": "아이디",
    "english": "ID (username)",
    "example_ko": "아이디를 만들었어요.",
    "example_en": "I created an ID."
  },
  {
    "korean": "출입국",
    "english": "immigration",
    "example_ko": "출입국 심사를 받았어요.",
    "example_en": "I went through immigration inspection."
  },
  {
    "korean": "면역력",
    "english": "immunity",
    "example_ko": "면역력이 강해요.",
    "example_en": "My immunity is strong."
  },
  {
    "korean": "수입",
    "english": "import",
    "example_ko": "수입을 늘렸어요.",
    "example_en": "Imports increased."
  },
  {
    "korean": "수입",
    "english": "income",
    "example_ko": "수입이 늘었어요.",
    "example_en": "Income has increased."
  },
  {
    "korean": "산업",
    "english": "industry",
    "example_ko": "자동차 산업이 발달했어요.",
    "example_en": "The car industry has developed."
  },
  {
    "korean": "감염",
    "english": "infection",
    "example_ko": "감염이 퍼졌어요.",
    "example_en": "The infection spread."
  },
  {
    "korean": "안내소",
    "english": "information desk",
    "example_ko": "안내소에서 물어봤어요.",
    "example_en": "I asked at the information desk."
  },
  {
    "korean": "재료",
    "english": "ingredient",
    "example_ko": "재료를 준비했어요.",
    "example_en": "I prepared the ingredients."
  },
  {
    "korean": "주사",
    "english": "injection",
    "example_ko": "주사를 맞았어요.",
    "example_en": "I got an injection."
  },
  {
    "korean": "여관",
    "english": "inn",
    "example_ko": "여관에 머물렀어요.",
    "example_en": "I stayed at an inn."
  },
  {
    "korean": "곤충",
    "english": "insect",
    "example_ko": "곤충을 관찰했어요.",
    "example_en": "I observed insects."
  },
  {
    "korean": "강사",
    "english": "instructor",
    "example_ko": "강사가 친절해요.",
    "example_en": "The instructor is kind."
  },
  {
    "korean": "보험",
    "english": "insurance",
    "example_ko": "보험에 가입했어요.",
    "example_en": "I got insurance."
  },
  {
    "korean": "이자",
    "english": "interest (money)",
    "example_ko": "이자가 붙었어요.",
    "example_en": "Interest has accrued."
  },
  {
    "korean": "인테리어",
    "english": "interior design",
    "example_ko": "인테리어가 예뻐요.",
    "example_en": "The interior design is pretty."
  },
  {
    "korean": "인터넷",
    "english": "internet",
    "example_ko": "인터넷이 느려요.",
    "example_en": "The internet is slow."
  },
  {
    "korean": "면접",
    "english": "interview",
    "example_ko": "오늘 면접이 있어요.",
    "example_en": "I have an interview today."
  },
  {
    "korean": "면접관",
    "english": "interviewer",
    "example_ko": "면접관이 질문했어요.",
    "example_en": "The interviewer asked questions."
  },
  {
    "korean": "투자",
    "english": "investment",
    "example_ko": "주식에 투자했어요.",
    "example_en": "I invested in stocks."
  },
  {
    "korean": "초대장",
    "english": "invitation",
    "example_ko": "초대장을 받았어요.",
    "example_en": "I received an invitation."
  },
  {
    "korean": "섬",
    "english": "island",
    "example_ko": "섬에 여행 갔어요.",
    "example_en": "I traveled to an island."
  },
  {
    "korean": "물건",
    "english": "item",
    "example_ko": "물건을 샀어요.",
    "example_en": "I bought an item."
  },
  {
    "korean": "일정표",
    "english": "itinerary",
    "example_ko": "일정표를 확인했어요.",
    "example_en": "I checked the itinerary."
  },
  {
    "korean": "일식",
    "english": "Japanese food",
    "example_ko": "일식을 먹었어요.",
    "example_en": "I ate Japanese food."
  },
  {
    "korean": "직업",
    "english": "job/occupation",
    "example_ko": "어떤 직업을 갖고 싶어요?",
    "example_en": "What kind of job do you want?"
  },
  {
    "korean": "기자",
    "english": "journalist",
    "example_ko": "기자가 뉴스를 보도했어요.",
    "example_en": "The journalist reported the news."
  },
  {
    "korean": "주스",
    "english": "juice",
    "example_ko": "오렌지 주스를 마셨어요.",
    "example_en": "I drank orange juice."
  },
  {
    "korean": "후배",
    "english": "junior (at school/work)",
    "example_ko": "후배가 질문했어요.",
    "example_en": "The junior asked a question."
  },
  {
    "korean": "노래방",
    "english": "karaoke",
    "example_ko": "노래방에서 노래했어요.",
    "example_en": "I sang at karaoke."
  },
  {
    "korean": "열쇠",
    "english": "key",
    "example_ko": "열쇠가 어디에 있지?",
    "example_en": "Where is the key?"
  },
  {
    "korean": "키보드",
    "english": "keyboard",
    "example_ko": "키보드가 편해요.",
    "example_en": "The keyboard is comfortable."
  },
  {
    "korean": "김치",
    "english": "kimchi",
    "example_ko": "김치는 한국의 전통 음식이에요.",
    "example_en": "Kimchi is a traditional Korean food."
  },
  {
    "korean": "부엌",
    "english": "kitchen",
    "example_ko": "부엌에서 요리하고 있어요.",
    "example_en": "I’m cooking in the kitchen."
  },
  {
    "korean": "칼",
    "english": "knife",
    "example_ko": "칼로 고기를 잘랐어요.",
    "example_en": "I cut the meat with a knife."
  },
  {
    "korean": "한식",
    "english": "Korean food",
    "example_ko": "한식을 좋아해요.",
    "example_en": "I like Korean food."
  },
  {
    "korean": "노동",
    "english": "labor",
    "example_ko": "노동은 소중해요.",
    "example_en": "Labor is valuable."
  },
  {
    "korean": "호수",
    "english": "lake",
    "example_ko": "호수에서 낚시했어요.",
    "example_en": "I fished at the lake."
  },
  {
    "korean": "노트북",
    "english": "laptop",
    "example_ko": "노트북으로 작업해요.",
    "example_en": "I work on the laptop."
  },
  {
    "korean": "법률",
    "english": "law",
    "example_ko": "법률 상담을 받았어요.",
    "example_en": "I got legal advice."
  },
  {
    "korean": "변호사",
    "english": "lawyer",
    "example_ko": "변호사가 도와줬어요.",
    "example_en": "The lawyer helped."
  },
  {
    "korean": "학습",
    "english": "learning",
    "example_ko": "학습을 계속해요.",
    "example_en": "I keep learning."
  },
  {
    "korean": "학습능력",
    "english": "learning ability",
    "example_ko": "학습능력이 좋아요.",
    "example_en": "I have good learning ability."
  },
  {
    "korean": "남기다",
    "english": "leave (food)",
    "example_ko": "음식을 남겼어요.",
    "example_en": "I left food uneaten."
  },
  {
    "korean": "퇴근",
    "english": "leaving work",
    "example_ko": "퇴근 시간이 늦어요.",
    "example_en": "I leave work late."
  },
  {
    "korean": "강의",
    "english": "lecture",
    "example_ko": "강의를 들었어요.",
    "example_en": "I attended a lecture."
  },
  {
    "korean": "편지",
    "english": "letter",
    "example_ko": "편지를 썼어요.",
    "example_en": "I wrote a letter."
  },
  {
    "korean": "도서관",
    "english": "library",
    "example_ko": "도서관에서 공부해요.",
    "example_en": "I study at the library."
  },
  {
    "korean": "전등",
    "english": "light bulb",
    "example_ko": "전등을 갈았어요.",
    "example_en": "I changed the light bulb."
  },
  {
    "korean": "조명",
    "english": "lighting",
    "example_ko": "조명이 화려했어요.",
    "example_en": "The lighting was spectacular."
  },
  {
    "korean": "번개",
    "english": "lightning",
    "example_ko": "번개가 쳐요.",
    "example_en": "There is lightning."
  },
  {
    "korean": "거실",
    "english": "living room",
    "example_ko": "거실에 소파가 있어요.",
    "example_en": "There is a sofa in the living room."
  },
  {
    "korean": "대출",
    "english": "loan",
    "example_ko": "은행에서 대출 받았어요.",
    "example_en": "I got a loan from the bank."
  },
  {
    "korean": "현지인",
    "english": "local resident",
    "example_ko": "현지인과 이야기했어요.",
    "example_en": "I talked with a local resident."
  },
  {
    "korean": "숙박",
    "english": "lodging",
    "example_ko": "숙박 예약을 했어요.",
    "example_en": "I booked lodging."
  },
  {
    "korean": "로그인",
    "english": "login",
    "example_ko": "로그인에 실패했어요.",
    "example_en": "I failed to log in."
  },
  {
    "korean": "로그아웃",
    "english": "logout",
    "example_ko": "로그아웃했어요.",
    "example_en": "I logged out."
  },
  {
    "korean": "연휴",
    "english": "long weekend",
    "example_ko": "연휴 동안 집에 있었어요.",
    "example_en": "I stayed home during the long weekend."
  },
  {
    "korean": "사랑",
    "english": "love",
    "example_ko": "사랑은 인생에서 가장 큰 선물이에요.",
    "example_en": "Love is the greatest gift in life."
  },
  {
    "korean": "짐",
    "english": "luggage",
    "example_ko": "짐을 찾았어요.",
    "example_en": "I picked up my luggage."
  },
  {
    "korean": "수화물",
    "english": "luggage/baggage",
    "example_ko": "수화물을 찾았어요.",
    "example_en": "I picked up my luggage."
  },
  {
    "korean": "설날",
    "english": "Lunar New Year",
    "example_ko": "설날에 세배를 해요.",
    "example_en": "We bow to elders on Lunar New Year."
  },
  {
    "korean": "점심",
    "english": "lunch",
    "example_ko": "점심으로 김밥을 먹었어요.",
    "example_en": "I ate gimbap for lunch."
  },
  {
    "korean": "점심시간",
    "english": "lunch time",
    "example_ko": "점심시간이에요.",
    "example_en": "It is lunch time."
  },
  {
    "korean": "기계",
    "english": "machine",
    "example_ko": "기계가 멈췄어요.",
    "example_en": "The machine stopped."
  },
  {
    "korean": "잡지",
    "english": "magazine",
    "example_ko": "잡지를 구독해요.",
    "example_en": "I subscribe to a magazine."
  },
  {
    "korean": "우편",
    "english": "mail",
    "example_ko": "우편을 받았어요.",
    "example_en": "I received mail."
  },
  {
    "korean": "전공",
    "english": "major (study)",
    "example_ko": "전공이 경제학이에요.",
    "example_en": "My major is economics."
  },
  {
    "korean": "만들다",
    "english": "make",
    "example_ko": "음식을 만들었어요.",
    "example_en": "I made food."
  },
  {
    "korean": "예약하다",
    "english": "make a reservation",
    "example_ko": "예약을 했어요.",
    "example_en": "I made a reservation."
  },
  {
    "korean": "남자",
    "english": "man",
    "example_ko": "남자가 걸어요.",
    "example_en": "The man is walking."
  },
  {
    "korean": "지도",
    "english": "map",
    "example_ko": "지도를 보며 길을 찾았어요.",
    "example_en": "I found my way using the map."
  },
  {
    "korean": "마케팅",
    "english": "marketing",
    "example_ko": "마케팅 전략을 세웠어요.",
    "example_en": "I planned a marketing strategy."
  },
  {
    "korean": "결혼",
    "english": "marriage",
    "example_ko": "결혼했어요.",
    "example_en": "I got married."
  },
  {
    "korean": "시장",
    "english": "mayor/market",
    "example_ko": "시장이 축제를 열었어요.",
    "example_en": "The mayor held a festival."
  },
  {
    "korean": "식사",
    "english": "meal",
    "example_ko": "식사하셨어요?",
    "example_en": "Have you eaten?"
  },
  {
    "korean": "고기",
    "english": "meat",
    "example_ko": "고기를 구워 먹었어요.",
    "example_en": "I grilled and ate meat."
  },
  {
    "korean": "약",
    "english": "medicine",
    "example_ko": "약을 먹고 나았어요.",
    "example_en": "I got better after taking medicine."
  },
  {
    "korean": "의학",
    "english": "medicine/medical science",
    "example_ko": "의학을 공부해요.",
    "example_en": "I study medicine."
  },
  {
    "korean": "명상",
    "english": "meditation",
    "example_ko": "명상으로 마음을 안정시켜요.",
    "example_en": "Meditation calms the mind."
  },
  {
    "korean": "회의",
    "english": "meeting",
    "example_ko": "지금 회의 중이에요.",
    "example_en": "We’re in a meeting now."
  },
  {
    "korean": "회의실",
    "english": "meeting room",
    "example_ko": "회의실을 예약했어요.",
    "example_en": "I reserved the meeting room."
  },
  {
    "korean": "모임",
    "english": "meeting/gathering",
    "example_ko": "모임에 갔어요.",
    "example_en": "I went to a meeting."
  },
  {
    "korean": "기억",
    "english": "memory",
    "example_ko": "기억력이 좋아요.",
    "example_en": "I have a good memory."
  },
  {
    "korean": "메뉴",
    "english": "menu",
    "example_ko": "메뉴를 봤어요.",
    "example_en": "I looked at the menu."
  },
  {
    "korean": "전자레인지",
    "english": "microwave",
    "example_ko": "전자레인지로 데웠어요.",
    "example_en": "I heated it in the microwave."
  },
  {
    "korean": "우유",
    "english": "milk",
    "example_ko": "우유를 따뜻하게 데웠어요.",
    "example_en": "I warmed up the milk."
  },
  {
    "korean": "거울",
    "english": "mirror",
    "example_ko": "거울을 봤어요.",
    "example_en": "I looked in the mirror."
  },
  {
    "korean": "휴대폰",
    "english": "mobile phone",
    "example_ko": "휴대폰을 잃어버렸어요.",
    "example_en": "I lost my mobile phone."
  },
  {
    "korean": "월요일",
    "english": "Monday",
    "example_ko": "월요일은 바빠요.",
    "example_en": "Monday is busy."
  },
  {
    "korean": "돈",
    "english": "money",
    "example_ko": "돈을 아껴 써야 해요.",
    "example_en": "I have to save money."
  },
  {
    "korean": "모니터",
    "english": "monitor",
    "example_ko": "모니터가 커요.",
    "example_en": "The monitor is big."
  },
  {
    "korean": "달",
    "english": "month/moon",
    "example_ko": "한 달 동안 공부했어요.",
    "example_en": "I studied for a month."
  },
  {
    "korean": "월세",
    "english": "monthly rent",
    "example_ko": "월세를 내야 해요.",
    "example_en": "I have to pay monthly rent."
  },
  {
    "korean": "달",
    "english": "moon",
    "example_ko": "밤하늘에 달이 떴어요.",
    "example_en": "The moon appeared in the night sky."
  },
  {
    "korean": "아침",
    "english": "morning",
    "example_ko": "아침 일찍 일어났어요.",
    "example_en": "I woke up early in the morning."
  },
  {
    "korean": "어머니",
    "english": "mother",
    "example_ko": "어머니가 요리하셨어요.",
    "example_en": "My mother cooked."
  },
  {
    "korean": "오토바이",
    "english": "motorcycle",
    "example_ko": "오토바이를 샀어요.",
    "example_en": "I bought a motorcycle."
  },
  {
    "korean": "산",
    "english": "mountain",
    "example_ko": "우리는 산에 올라가서 경치를 봤어요.",
    "example_en": "We hiked the mountain and enjoyed the view."
  },
  {
    "korean": "마우스",
    "english": "mouse (computer)",
    "example_ko": "마우스를 사용해요.",
    "example_en": "I use the mouse."
  },
  {
    "korean": "영화",
    "english": "movie",
    "example_ko": "어제 밤에 재미있는 영화를 봤어요.",
    "example_en": "I watched an interesting movie last night."
  },
  {
    "korean": "영화관",
    "english": "movie theater",
    "example_ko": "영화관에서 만나요.",
    "example_en": "Let’s meet at the movie theater."
  },
  {
    "korean": "이사",
    "english": "moving (house)",
    "example_ko": "다음 주에 이사해요.",
    "example_en": "I’m moving next week."
  },
  {
    "korean": "박물관",
    "english": "museum",
    "example_ko": "박물관에서 전시를 봤어요.",
    "example_en": "I saw an exhibit at the museum."
  },
  {
    "korean": "음악",
    "english": "music",
    "example_ko": "음악은 마음을 편안하게 해줘요.",
    "example_en": "Music helps relax the mind."
  },
  {
    "korean": "악기",
    "english": "musical instrument",
    "example_ko": "악기를 배워요.",
    "example_en": "I’m learning a musical instrument."
  },
  {
    "korean": "음악가",
    "english": "musician",
    "example_ko": "음악가가 연주했어요.",
    "example_en": "The musician performed."
  },
  {
    "korean": "국회",
    "english": "national assembly",
    "example_ko": "국회에서 토론했어요.",
    "example_en": "They debated in the national assembly."
  },
  {
    "korean": "자연",
    "english": "nature",
    "example_ko": "자연이 아름다워요.",
    "example_en": "Nature is beautiful."
  },
  {
    "korean": "길찾기",
    "english": "navigation",
    "example_ko": "길찾기가 어려워요.",
    "example_en": "Navigation is difficult."
  },
  {
    "korean": "목걸이",
    "english": "necklace",
    "example_ko": "목걸이를 했어요.",
    "example_en": "I wore a necklace."
  },
  {
    "korean": "이웃",
    "english": "neighbor",
    "example_ko": "이웃과 인사했어요.",
    "example_en": "I greeted the neighbor."
  },
  {
    "korean": "뉴스",
    "english": "news",
    "example_ko": "오늘 아침 뉴스 봤어요?",
    "example_en": "Did you watch the news this morning?"
  },
  {
    "korean": "신문",
    "english": "newspaper",
    "example_ko": "신문을 샀어요.",
    "example_en": "I bought a newspaper."
  },
  {
    "korean": "밤",
    "english": "night",
    "example_ko": "밤에 별을 봤어요.",
    "example_en": "I saw stars at night."
  },
  {
    "korean": "야근",
    "english": "night shift/overtime",
    "example_ko": "어제 야근했어요.",
    "example_en": "I worked overtime last night."
  },
  {
    "korean": "국수",
    "english": "noodles",
    "example_ko": "잔치에서 국수를 먹었어요.",
    "example_en": "We ate noodles at the party."
  },
  {
    "korean": "공책",
    "english": "notebook",
    "example_ko": "공책에 적었어요.",
    "example_en": "I wrote in the notebook."
  },
  {
    "korean": "간호사",
    "english": "nurse",
    "example_ko": "간호사가 친절했어요.",
    "example_en": "The nurse was kind."
  },
  {
    "korean": "영양",
    "english": "nutrition",
    "example_ko": "영양을 골고루 섭취하세요.",
    "example_en": "Please get balanced nutrition."
  },
  {
    "korean": "사무실",
    "english": "office",
    "example_ko": "사무실이 조용해요.",
    "example_en": "The office is quiet."
  },
  {
    "korean": "직장인",
    "english": "office worker",
    "example_ko": "직장인은 바빠요.",
    "example_en": "Office workers are busy."
  },
  {
    "korean": "기름",
    "english": "oil",
    "example_ko": "기름을 사용했어요.",
    "example_en": "I used oil."
  },
  {
    "korean": "오빠",
    "english": "older brother (female speaker)",
    "example_ko": "오빠가 도와줬어요.",
    "example_en": "My older brother helped me."
  },
  {
    "korean": "형",
    "english": "older brother (male speaker)",
    "example_ko": "형이 축구를 좋아해요.",
    "example_en": "My older brother likes soccer."
  },
  {
    "korean": "주문",
    "english": "order",
    "example_ko": "음식을 주문했어요.",
    "example_en": "I ordered food."
  },
  {
    "korean": "오븐",
    "english": "oven",
    "example_ko": "오븐으로 케이크를 구웠어요.",
    "example_en": "I baked a cake in the oven."
  },
  {
    "korean": "포장하다",
    "english": "pack/takeout",
    "example_ko": "음식을 포장했어요.",
    "example_en": "I packed food to go."
  },
  {
    "korean": "소포",
    "english": "package",
    "example_ko": "소포를 탔어요.",
    "example_en": "I sent a package."
  },
  {
    "korean": "포장",
    "english": "packaging",
    "example_ko": "포장을 해주세요.",
    "example_en": "Please pack it."
  },
  {
    "korean": "통증",
    "english": "pain",
    "example_ko": "통증이 있어요.",
    "example_en": "I have pain."
  },
  {
    "korean": "통증완화",
    "english": "pain relief",
    "example_ko": "통증완화를 원해요.",
    "example_en": "I want pain relief."
  },
  {
    "korean": "진통제",
    "english": "painkiller",
    "example_ko": "진통제를 먹었어요.",
    "example_en": "I took a painkiller."
  },
  {
    "korean": "화가",
    "english": "painter",
    "example_ko": "화가가 그림을 그려요.",
    "example_en": "The painter paints a picture."
  },
  {
    "korean": "그림",
    "english": "painting",
    "example_ko": "그림을 감상했어요.",
    "example_en": "I appreciated the painting."
  },
  {
    "korean": "종이",
    "english": "paper",
    "example_ko": "종이에 그림을 그렸어요.",
    "example_en": "I drew a picture on the paper."
  },
  {
    "korean": "부모님",
    "english": "parents",
    "example_ko": "부모님을 방문했어요.",
    "example_en": "I visited my parents."
  },
  {
    "korean": "학부모",
    "english": "parents of students",
    "example_ko": "학부모 모임이 있어요.",
    "example_en": "There is a parent meeting."
  },
  {
    "korean": "공원",
    "english": "park",
    "example_ko": "주말에는 공원에서 산책해요.",
    "example_en": "I take a walk in the park on weekends."
  },
  {
    "korean": "주차장",
    "english": "parking lot",
    "example_ko": "주차장에 주차했어요.",
    "example_en": "I parked in the parking lot."
  },
  {
    "korean": "참여",
    "english": "participation",
    "example_ko": "참여했어요.",
    "example_en": "I participated."
  },
  {
    "korean": "파티",
    "english": "party",
    "example_ko": "파티에 갔어요.",
    "example_en": "I went to a party."
  },
  {
    "korean": "승객",
    "english": "passenger",
    "example_ko": "승객이 많아요.",
    "example_en": "There are many passengers."
  },
  {
    "korean": "여권",
    "english": "passport",
    "example_ko": "여권을 잃어버렸어요.",
    "example_en": "I lost my passport."
  },
  {
    "korean": "비밀번호",
    "english": "password",
    "example_ko": "비밀번호를 잊어버렸어요.",
    "example_en": "I forgot the password."
  },
  {
    "korean": "붙여넣기",
    "english": "paste",
    "example_ko": "텍스트를 붙여넣었어요.",
    "example_en": "I pasted the text."
  },
  {
    "korean": "환자",
    "english": "patient",
    "example_ko": "환자가 많아요.",
    "example_en": "There are many patients."
  },
  {
    "korean": "계산하다",
    "english": "pay",
    "example_ko": "계산을 했어요.",
    "example_en": "I paid the bill."
  },
  {
    "korean": "계산",
    "english": "payment",
    "example_ko": "계산을 했어요.",
    "example_en": "I made the payment."
  },
  {
    "korean": "보행자",
    "english": "pedestrian",
    "example_ko": "보행자를 조심하세요.",
    "example_en": "Be careful of pedestrians."
  },
  {
    "korean": "볼펜",
    "english": "pen",
    "example_ko": "볼펜이 안 나와요.",
    "example_en": "The pen isn’t working."
  },
  {
    "korean": "연필",
    "english": "pencil",
    "example_ko": "연필로 글을 썼어요.",
    "example_en": "I wrote with a pencil."
  },
  {
    "korean": "후추",
    "english": "pepper",
    "example_ko": "후추를 뿌렸어요.",
    "example_en": "I sprinkled pepper."
  },
  {
    "korean": "공연",
    "english": "performance",
    "example_ko": "공연이 정말 멋졌어요.",
    "example_en": "The performance was amazing."
  },
  {
    "korean": "사람",
    "english": "person",
    "example_ko": "사람이 많아요.",
    "example_en": "There are many people."
  },
  {
    "korean": "약국",
    "english": "pharmacy",
    "example_ko": "약국에서 약을 샀어요.",
    "example_en": "I bought medicine at the pharmacy."
  },
  {
    "korean": "전화",
    "english": "phone / phone call",
    "example_ko": "친구에게 전화를 걸었어요.",
    "example_en": "I called my friend."
  },
  {
    "korean": "전화번호",
    "english": "phone number",
    "example_ko": "전화번호를 알려 주세요.",
    "example_en": "Please give me your phone number."
  },
  {
    "korean": "사진",
    "english": "photo",
    "example_ko": "여행 중에 사진을 많이 찍었어요.",
    "example_en": "I took many photos during the trip."
  },
  {
    "korean": "사진작가",
    "english": "photographer",
    "example_ko": "사진작가가 사진을 찍었어요.",
    "example_en": "The photographer took a photo."
  },
  {
    "korean": "체육",
    "english": "physical education",
    "example_ko": "체육 수업이 재미있어요.",
    "example_en": "Physical education class is fun."
  },
  {
    "korean": "체력",
    "english": "physical strength",
    "example_ko": "체력이 좋아요.",
    "example_en": "My physical strength is good."
  },
  {
    "korean": "피아노",
    "english": "piano",
    "example_ko": "피아노를 칠 줄 알아요.",
    "example_en": "I can play the piano."
  },
  {
    "korean": "돼지",
    "english": "pig",
    "example_ko": "돼지가 뒷마당에 있어요.",
    "example_en": "There is a pig in the backyard."
  },
  {
    "korean": "알약",
    "english": "pill",
    "example_ko": "알약을 먹었어요.",
    "example_en": "I took a pill."
  },
  {
    "korean": "베개",
    "english": "pillow",
    "example_ko": "베개가 푹신해요.",
    "example_en": "The pillow is soft."
  },
  {
    "korean": "피자",
    "english": "pizza",
    "example_ko": "피자를 주문했어요.",
    "example_en": "I ordered pizza."
  },
  {
    "korean": "계획",
    "english": "plan",
    "example_ko": "계획을 세웠어요.",
    "example_en": "I made a plan."
  },
  {
    "korean": "항공권",
    "english": "plane ticket",
    "example_ko": "항공권을 예약했어요.",
    "example_en": "I booked a plane ticket."
  },
  {
    "korean": "식물",
    "english": "plant",
    "example_ko": "식물을 키워요.",
    "example_en": "I grow plants."
  },
  {
    "korean": "접시",
    "english": "plate",
    "example_ko": "접시에 음식을 담았어요.",
    "example_en": "I put food on the plate."
  },
  {
    "korean": "연극",
    "english": "play/theater",
    "example_ko": "연극을 관람했어요.",
    "example_en": "I watched a play."
  },
  {
    "korean": "운동장",
    "english": "playground",
    "example_ko": "운동장에서 축구했어요.",
    "example_en": "We played soccer on the playground."
  },
  {
    "korean": "광장",
    "english": "plaza",
    "example_ko": "광장에서 축제가 열렸어요.",
    "example_en": "A festival was held at the plaza."
  },
  {
    "korean": "경찰",
    "english": "police officer",
    "example_ko": "경찰이 길을 안내해요.",
    "example_en": "The police officer directs the road."
  },
  {
    "korean": "경찰서",
    "english": "police station",
    "example_ko": "경찰서에 신고했어요.",
    "example_en": "I reported to the police station."
  },
  {
    "korean": "정치가",
    "english": "politician",
    "example_ko": "정치가가 연설해요.",
    "example_en": "The politician gives a speech."
  },
  {
    "korean": "맛집",
    "english": "popular restaurant",
    "example_ko": "그곳은 맛집이에요.",
    "example_en": "That place is a popular restaurant."
  },
  {
    "korean": "항구",
    "english": "port",
    "example_ko": "항구가 아름다워요.",
    "example_en": "The port is beautiful."
  },
  {
    "korean": "우체국",
    "english": "post office",
    "example_ko": "우체국에 갔어요.",
    "example_en": "I went to the post office."
  },
  {
    "korean": "냄비",
    "english": "pot",
    "example_ko": "냄비에 물을 끓였어요.",
    "example_en": "I boiled water in the pot."
  },
  {
    "korean": "처방전",
    "english": "prescription",
    "example_ko": "처방전을 받았어요.",
    "example_en": "I received a prescription."
  },
  {
    "korean": "발표",
    "english": "presentation",
    "example_ko": "발표를 준비했어요.",
    "example_en": "I prepared a presentation."
  },
  {
    "korean": "발표자",
    "english": "presenter",
    "example_ko": "발표자가 말했어요.",
    "example_en": "The presenter spoke."
  },
  {
    "korean": "대통령",
    "english": "president",
    "example_ko": "대통령이 연설했어요.",
    "example_en": "The president gave a speech."
  },
  {
    "korean": "예방",
    "english": "prevention",
    "example_ko": "예방이 중요해요.",
    "example_en": "Prevention is important."
  },
  {
    "korean": "예방약",
    "english": "preventive medicine",
    "example_ko": "예방약을 먹었어요.",
    "example_en": "I took preventive medicine."
  },
  {
    "korean": "예습",
    "english": "preview",
    "example_ko": "예습을 했어요.",
    "example_en": "I previewed the lesson."
  },
  {
    "korean": "가격",
    "english": "price",
    "example_ko": "가격이 비싸요.",
    "example_en": "The price is expensive."
  },
  {
    "korean": "교장선생님",
    "english": "principal",
    "example_ko": "교장선생님이 인사했어요.",
    "example_en": "The principal greeted us."
  },
  {
    "korean": "인쇄",
    "english": "print",
    "example_ko": "문서를 인쇄했어요.",
    "example_en": "I printed the document."
  },
  {
    "korean": "프린터",
    "english": "printer",
    "example_ko": "프린터가 작동하지 않아요.",
    "example_en": "The printer doesn’t work."
  },
  {
    "korean": "학원",
    "english": "private academy",
    "example_ko": "학원에 다녀요.",
    "example_en": "I attend a private academy."
  },
  {
    "korean": "생산",
    "english": "production",
    "example_ko": "생산을 늘렸어요.",
    "example_en": "Production increased."
  },
  {
    "korean": "교수",
    "english": "professor",
    "example_ko": "교수님이 친절하세요.",
    "example_en": "The professor is kind."
  },
  {
    "korean": "프로그램",
    "english": "program",
    "example_ko": "프로그램을 실행했어요.",
    "example_en": "I ran the program."
  },
  {
    "korean": "프로젝트",
    "english": "project",
    "example_ko": "프로젝트를 완료했어요.",
    "example_en": "I completed the project."
  },
  {
    "korean": "약속",
    "english": "promise/appointment",
    "example_ko": "약속을 지켰어요.",
    "example_en": "I kept the promise."
  },
  {
    "korean": "승진",
    "english": "promotion",
    "example_ko": "승진했어요.",
    "example_en": "I got a promotion."
  },
  {
    "korean": "보건소",
    "english": "public health center",
    "example_ko": "보건소에 갔어요.",
    "example_en": "I went to the public health center."
  },
  {
    "korean": "강아지",
    "english": "puppy",
    "example_ko": "강아지가 귀여워요.",
    "example_en": "The puppy is cute."
  },
  {
    "korean": "질문",
    "english": "question",
    "example_ko": "질문을 했어요.",
    "example_en": "I asked a question."
  },
  {
    "korean": "금연",
    "english": "quitting smoking",
    "example_ko": "금연했어요.",
    "example_en": "I quit smoking."
  },
  {
    "korean": "라디오",
    "english": "radio",
    "example_ko": "라디오에서 음악이 나와요.",
    "example_en": "Music came from the radio."
  },
  {
    "korean": "비",
    "english": "rain",
    "example_ko": "비가 와서 우산을 썼어요.",
    "example_en": "It rained, so I used an umbrella."
  },
  {
    "korean": "부동산",
    "english": "real estate",
    "example_ko": "부동산 시장이 활발해요.",
    "example_en": "The real estate market is active."
  },
  {
    "korean": "영수증",
    "english": "receipt",
    "example_ko": "영수증을 챙겼어요.",
    "example_en": "I kept the receipt."
  },
  {
    "korean": "추천하다",
    "english": "recommend",
    "example_ko": "음식을 추천했어요.",
    "example_en": "I recommended food."
  },
  {
    "korean": "채용",
    "english": "recruitment",
    "example_ko": "신입 사원을 채용해요.",
    "example_en": "We’re hiring new employees."
  },
  {
    "korean": "재활용",
    "english": "recycling",
    "example_ko": "재활용은 중요해요.",
    "example_en": "Recycling is important."
  },
  {
    "korean": "냉장고",
    "english": "refrigerator",
    "example_ko": "냉장고에 음식이 있어요.",
    "example_en": "There’s food in the refrigerator."
  },
  {
    "korean": "환불",
    "english": "refund",
    "example_ko": "환불을 받았어요.",
    "example_en": "I got a refund."
  },
  {
    "korean": "등록",
    "english": "registration",
    "example_ko": "학교에 등록했어요.",
    "example_en": "I registered at the school."
  },
  {
    "korean": "재활",
    "english": "rehabilitation",
    "example_ko": "재활 치료를 받아요.",
    "example_en": "I receive rehabilitation treatment."
  },
  {
    "korean": "송금",
    "english": "remittance/transfer",
    "example_ko": "돈을 송금했어요.",
    "example_en": "I transferred money."
  },
  {
    "korean": "임대료",
    "english": "rent",
    "example_ko": "임대료가 올랐어요.",
    "example_en": "The rent increased."
  },
  {
    "korean": "집세",
    "english": "rent (informal)",
    "example_ko": "집세가 비싸요.",
    "example_en": "The rent is expensive."
  },
  {
    "korean": "렌터카",
    "english": "rental car",
    "example_ko": "렌터카를 빌렸어요.",
    "example_en": "I rented a car."
  },
  {
    "korean": "수리",
    "english": "repair",
    "example_ko": "집을 수리했어요.",
    "example_en": "I repaired the house."
  },
  {
    "korean": "보고서",
    "english": "report",
    "example_ko": "보고서를 작성했어요.",
    "example_en": "I wrote a report."
  },
  {
    "korean": "신고",
    "english": "report (to authorities)",
    "example_ko": "사고를 신고했어요.",
    "example_en": "I reported the accident."
  },
  {
    "korean": "기자",
    "english": "reporter",
    "example_ko": "기자가 인터뷰했어요.",
    "example_en": "The reporter did an interview."
  },
  {
    "korean": "연구",
    "english": "research",
    "example_ko": "연구를 진행하고 있어요.",
    "example_en": "I’m conducting research."
  },
  {
    "korean": "연구실",
    "english": "research lab",
    "example_ko": "연구실에 있어요.",
    "example_en": "I’m in the research lab."
  },
  {
    "korean": "예약",
    "english": "reservation",
    "example_ko": "호텔을 예약했어요.",
    "example_en": "I made a hotel reservation."
  },
  {
    "korean": "주민",
    "english": "resident",
    "example_ko": "주민들이 모임을 했어요.",
    "example_en": "Residents had a meeting."
  },
  {
    "korean": "휴식",
    "english": "rest/break",
    "example_ko": "휴식 시간이 필요해요.",
    "example_en": "I need a break."
  },
  {
    "korean": "식당",
    "english": "restaurant",
    "example_ko": "식당에서 점심을 먹었어요.",
    "example_en": "I ate lunch at the restaurant."
  },
  {
    "korean": "화장실",
    "english": "restroom",
    "example_ko": "화장실이 어디예요?",
    "example_en": "Where is the restroom?"
  },
  {
    "korean": "이력서",
    "english": "resume / CV",
    "example_ko": "이력서를 작성했어요.",
    "example_en": "I wrote my resume."
  },
  {
    "korean": "퇴직",
    "english": "retirement/resignation",
    "example_ko": "내년에 퇴직할 거예요.",
    "example_en": "I will retire next year."
  },
  {
    "korean": "복습",
    "english": "review",
    "example_ko": "복습을 했어요.",
    "example_en": "I reviewed."
  },
  {
    "korean": "밥",
    "english": "rice",
    "example_ko": "밥을 두 그릇 먹었어요.",
    "example_en": "I ate two bowls of rice."
  },
  {
    "korean": "떡",
    "english": "rice cake",
    "example_ko": "설날에는 떡국을 먹어요.",
    "example_en": "We eat rice cake soup on New Year's Day."
  },
  {
    "korean": "밥",
    "english": "rice/meal",
    "example_ko": "밥을 먹었어요.",
    "example_en": "I ate rice."
  },
  {
    "korean": "반지",
    "english": "ring",
    "example_ko": "반지를 끼웠어요.",
    "example_en": "I wore a ring."
  },
  {
    "korean": "강",
    "english": "river",
    "example_ko": "강가에서 산책했어요.",
    "example_en": "I took a walk by the river."
  },
  {
    "korean": "도로",
    "english": "road",
    "example_ko": "도로가 막혔어요.",
    "example_en": "The road is blocked."
  },
  {
    "korean": "길",
    "english": "road/street",
    "example_ko": "길을 걸었어요.",
    "example_en": "I walked on the road."
  },
  {
    "korean": "옥상",
    "english": "rooftop",
    "example_ko": "옥상에서 경치를 봤어요.",
    "example_en": "I saw the view from the rooftop."
  },
  {
    "korean": "방",
    "english": "room",
    "example_ko": "방이 넓어요.",
    "example_en": "The room is spacious."
  },
  {
    "korean": "달리기",
    "english": "running",
    "example_ko": "아침에 달리기를 해요.",
    "example_en": "I run in the morning."
  },
  {
    "korean": "안전",
    "english": "safety",
    "example_ko": "안전이 가장 중요해요.",
    "example_en": "Safety is the most important."
  },
  {
    "korean": "월급",
    "english": "salary",
    "example_ko": "월급이 들어왔어요.",
    "example_en": "My salary came in."
  },
  {
    "korean": "영업",
    "english": "sales",
    "example_ko": "영업 실적이 좋았어요.",
    "example_en": "Sales performance was good."
  },
  {
    "korean": "소금",
    "english": "salt",
    "example_ko": "소금을 뿌렸어요.",
    "example_en": "I sprinkled salt."
  },
  {
    "korean": "짜다",
    "english": "salty",
    "example_ko": "음식이 짜요.",
    "example_en": "The food is salty."
  },
  {
    "korean": "모래",
    "english": "sand",
    "example_ko": "모래가 부드러워요.",
    "example_en": "The sand is soft."
  },
  {
    "korean": "샌드위치",
    "english": "sandwich",
    "example_ko": "샌드위치를 만들었어요.",
    "example_en": "I made a sandwich."
  },
  {
    "korean": "토요일",
    "english": "Saturday",
    "example_ko": "토요일에 친구를 만났어요.",
    "example_en": "I met a friend on Saturday."
  },
  {
    "korean": "저장",
    "english": "save",
    "example_ko": "작업을 저장했어요.",
    "example_en": "I saved the work."
  },
  {
    "korean": "저축",
    "english": "savings",
    "example_ko": "돈을 저축해요.",
    "example_en": "I save money."
  },
  {
    "korean": "스캔",
    "english": "scan",
    "example_ko": "서류를 스캔했어요.",
    "example_en": "I scanned the document."
  },
  {
    "korean": "시간표",
    "english": "schedule",
    "example_ko": "시간표를 확인했어요.",
    "example_en": "I checked the schedule."
  },
  {
    "korean": "일정",
    "english": "schedule/itinerary",
    "example_ko": "여행 일정을 짰어요.",
    "example_en": "I made a travel itinerary."
  },
  {
    "korean": "학자",
    "english": "scholar",
    "example_ko": "유명한 학자예요.",
    "example_en": "He is a famous scholar."
  },
  {
    "korean": "장학금",
    "english": "scholarship",
    "example_ko": "장학금을 받았어요.",
    "example_en": "I received a scholarship."
  },
  {
    "korean": "학교",
    "english": "school",
    "example_ko": "아이들이 학교에서 뛰어놀고 있어요.",
    "example_en": "The children are playing at school."
  },
  {
    "korean": "책가방",
    "english": "school bag",
    "example_ko": "책가방을 들었어요.",
    "example_en": "I carried my school bag."
  },
  {
    "korean": "학교버스",
    "english": "school bus",
    "example_ko": "학교버스를 탔어요.",
    "example_en": "I took the school bus."
  },
  {
    "korean": "학교 친구",
    "english": "school friend",
    "example_ko": "학교 친구를 만났어요.",
    "example_en": "I met a school friend."
  },
  {
    "korean": "학교생활",
    "english": "school life",
    "example_ko": "학교생활이 즐거워요.",
    "example_en": "School life is enjoyable."
  },
  {
    "korean": "교복",
    "english": "school uniform",
    "example_ko": "교복을 입었어요.",
    "example_en": "I wore a school uniform."
  },
  {
    "korean": "학년",
    "english": "school year",
    "example_ko": "2학년이에요.",
    "example_en": "I’m in the second year."
  },
  {
    "korean": "과학자",
    "english": "scientist",
    "example_ko": "과학자가 연구해요.",
    "example_en": "The scientist researches."
  },
  {
    "korean": "가위",
    "english": "scissors",
    "example_ko": "가위로 종이를 잘랐어요.",
    "example_en": "I cut the paper with scissors."
  },
  {
    "korean": "점수",
    "english": "score",
    "example_ko": "점수가 높아요.",
    "example_en": "The score is high."
  },
  {
    "korean": "조각",
    "english": "sculpture",
    "example_ko": "그 조각은 유명해요.",
    "example_en": "That sculpture is famous."
  },
  {
    "korean": "바다",
    "english": "sea",
    "example_ko": "바다는 정말 아름다웠어요.",
    "example_en": "The sea was really beautiful."
  },
  {
    "korean": "계절",
    "english": "season",
    "example_ko": "한국에는 네 계절이 있어요.",
    "example_en": "Korea has four seasons."
  },
  {
    "korean": "증권",
    "english": "securities",
    "example_ko": "증권 시장이 활발해요.",
    "example_en": "The securities market is active."
  },
  {
    "korean": "학기",
    "english": "semester",
    "example_ko": "이번 학기가 시작했어요.",
    "example_en": "This semester has started."
  },
  {
    "korean": "세미나",
    "english": "seminar",
    "example_ko": "세미나에 참석했어요.",
    "example_en": "I attended a seminar."
  },
  {
    "korean": "선배",
    "english": "senior (at school/work)",
    "example_ko": "선배가 도와줬어요.",
    "example_en": "The senior helped me."
  },
  {
    "korean": "샴푸",
    "english": "shampoo",
    "example_ko": "샴푸로 머리를 감았어요.",
    "example_en": "I washed my hair with shampoo."
  },
  {
    "korean": "배",
    "english": "ship/boat",
    "example_ko": "배를 타고 섬에 갔어요.",
    "example_en": "I went to an island by boat."
  },
  {
    "korean": "신발끈",
    "english": "shoelace",
    "example_ko": "신발끈이 끊어졌어요.",
    "example_en": "The shoelace broke."
  },
  {
    "korean": "신발",
    "english": "shoes",
    "example_ko": "신발이 편해요.",
    "example_en": "The shoes are comfortable."
  },
  {
    "korean": "가게",
    "english": "shop",
    "example_ko": "가게에 갔어요.",
    "example_en": "I went to the shop."
  },
  {
    "korean": "쇼핑",
    "english": "shopping",
    "example_ko": "쇼핑을 했어요.",
    "example_en": "I went shopping."
  },
  {
    "korean": "형제",
    "english": "sibling (older brother)",
    "example_ko": "형제가 두 명 있어요.",
    "example_en": "I have two older brothers."
  },
  {
    "korean": "형제",
    "english": "siblings",
    "example_ko": "형제가 둘 있어요.",
    "example_en": "I have two siblings."
  },
  {
    "korean": "자매",
    "english": "siblings (sisters)",
    "example_ko": "자매가 사이가 좋아요.",
    "example_en": "The sisters get along well."
  },
  {
    "korean": "반찬",
    "english": "side dish",
    "example_ko": "반찬이 맛있어요.",
    "example_en": "The side dishes are tasty."
  },
  {
    "korean": "관광",
    "english": "sightseeing",
    "example_ko": "관광 명소를 방문했어요.",
    "example_en": "I visited tourist attractions."
  },
  {
    "korean": "서명",
    "english": "signature",
    "example_ko": "서명했어요.",
    "example_en": "I signed."
  },
  {
    "korean": "가수",
    "english": "singer",
    "example_ko": "그 가수는 노래를 잘해요.",
    "example_en": "That singer sings well."
  },
  {
    "korean": "싱크대",
    "english": "sink",
    "example_ko": "싱크대에서 설거지를 해요.",
    "example_en": "I wash the dishes in the sink."
  },
  {
    "korean": "하늘",
    "english": "sky",
    "example_ko": "하늘이 맑아요.",
    "example_en": "The sky is clear."
  },
  {
    "korean": "수면",
    "english": "sleep",
    "example_ko": "충분한 수면이 필요해요.",
    "example_en": "You need enough sleep."
  },
  {
    "korean": "썰다",
    "english": "slice",
    "example_ko": "채소를 썰었어요.",
    "example_en": "I sliced vegetables."
  },
  {
    "korean": "냄새",
    "english": "smell",
    "example_ko": "냄새가 좋아요.",
    "example_en": "The smell is good."
  },
  {
    "korean": "흡연",
    "english": "smoking",
    "example_ko": "흡연은 건강에 나빠요.",
    "example_en": "Smoking is bad for health."
  },
  {
    "korean": "과자",
    "english": "snack",
    "example_ko": "과자를 너무 많이 먹었어요.",
    "example_en": "I ate too many snacks."
  },
  {
    "korean": "운동화",
    "english": "sneakers",
    "example_ko": "운동화를 신었어요.",
    "example_en": "I wore sneakers."
  },
  {
    "korean": "눈",
    "english": "snow",
    "example_ko": "겨울에 눈이 많이 와요.",
    "example_en": "It snows a lot in winter."
  },
  {
    "korean": "비누",
    "english": "soap",
    "example_ko": "비누로 손을 씻었어요.",
    "example_en": "I washed my hands with soap."
  },
  {
    "korean": "축구",
    "english": "soccer",
    "example_ko": "축구를 했어요.",
    "example_en": "I played soccer."
  },
  {
    "korean": "소셜 미디어",
    "english": "social media",
    "example_ko": "소셜 미디어를 사용해요.",
    "example_en": "I use social media."
  },
  {
    "korean": "양말",
    "english": "socks",
    "example_ko": "양말이 젖었어요.",
    "example_en": "The socks got wet."
  },
  {
    "korean": "소파",
    "english": "sofa",
    "example_ko": "소파에 앉았어요.",
    "example_en": "I sat on the sofa."
  },
  {
    "korean": "소프트웨어",
    "english": "software",
    "example_ko": "소프트웨어를 설치했어요.",
    "example_en": "I installed software."
  },
  {
    "korean": "소주",
    "english": "soju",
    "example_ko": "소주는 한국의 전통 술이에요.",
    "example_en": "Soju is a traditional Korean liquor."
  },
  {
    "korean": "군인",
    "english": "soldier",
    "example_ko": "군인이 훈련 중이에요.",
    "example_en": "The soldier is in training."
  },
  {
    "korean": "아들",
    "english": "son",
    "example_ko": "아들이 학교에 갔어요.",
    "example_en": "My son went to school."
  },
  {
    "korean": "노래",
    "english": "song",
    "example_ko": "좋아하는 노래가 나왔어요.",
    "example_en": "My favorite song came on."
  },
  {
    "korean": "바다소리",
    "english": "sound of the sea",
    "example_ko": "바다소리가 좋아요.",
    "example_en": "I like the sound of the sea."
  },
  {
    "korean": "국",
    "english": "soup",
    "example_ko": "엄마가 맛있는 국을 끓였어요.",
    "example_en": "Mom made delicious soup."
  },
  {
    "korean": "시다",
    "english": "sour",
    "example_ko": "레몬이 셔요.",
    "example_en": "The lemon is sour."
  },
  {
    "korean": "기념품",
    "english": "souvenir",
    "example_ko": "기념품을 샀어요.",
    "example_en": "I bought a souvenir."
  },
  {
    "korean": "간장",
    "english": "soy sauce",
    "example_ko": "간장을 넣었어요.",
    "example_en": "I added soy sauce."
  },
  {
    "korean": "스피커",
    "english": "speaker",
    "example_ko": "스피커에서 음악이 나와요.",
    "example_en": "Music is coming from the speaker."
  },
  {
    "korean": "맵다",
    "english": "spicy",
    "example_ko": "김치가 매워요.",
    "example_en": "The kimchi is spicy."
  },
  {
    "korean": "숟가락",
    "english": "spoon",
    "example_ko": "숟가락으로 밥을 먹어요.",
    "example_en": "I eat rice with a spoon."
  },
  {
    "korean": "스포츠",
    "english": "sports",
    "example_ko": "스포츠를 좋아해요.",
    "example_en": "I like sports."
  },
  {
    "korean": "봄",
    "english": "spring",
    "example_ko": "봄에는 꽃이 피어요.",
    "example_en": "Flowers bloom in spring."
  },
  {
    "korean": "무대",
    "english": "stage",
    "example_ko": "무대에 올라갔어요.",
    "example_en": "I went up on the stage."
  },
  {
    "korean": "계단",
    "english": "stairs",
    "example_ko": "계단을 올라갔어요.",
    "example_en": "I went up the stairs."
  },
  {
    "korean": "우표",
    "english": "stamp",
    "example_ko": "우표를 붙였어요.",
    "example_en": "I stuck a stamp on it."
  },
  {
    "korean": "별",
    "english": "star",
    "example_ko": "별이 반짝이고 있어요.",
    "example_en": "The stars are twinkling."
  },
  {
    "korean": "역",
    "english": "station",
    "example_ko": "역에서 만났어요.",
    "example_en": "I met at the station."
  },
  {
    "korean": "통계",
    "english": "statistics",
    "example_ko": "통계를 분석했어요.",
    "example_en": "I analyzed statistics."
  },
  {
    "korean": "찌다",
    "english": "steam",
    "example_ko": "만두를 쪘어요.",
    "example_en": "I steamed dumplings."
  },
  {
    "korean": "찌개",
    "english": "stew",
    "example_ko": "찌개가 맛있어요.",
    "example_en": "The stew is delicious."
  },
  {
    "korean": "볶다",
    "english": "stir-fry",
    "example_ko": "야채를 볶았어요.",
    "example_en": "I stir-fried vegetables."
  },
  {
    "korean": "주식",
    "english": "stock",
    "example_ko": "주식을 샀어요.",
    "example_en": "I bought stocks."
  },
  {
    "korean": "복통",
    "english": "stomachache",
    "example_ko": "복통으로 병원에 갔어요.",
    "example_en": "I went to the hospital for a stomachache."
  },
  {
    "korean": "돌",
    "english": "stone",
    "example_ko": "돌을 던졌어요.",
    "example_en": "I threw a stone."
  },
  {
    "korean": "가게",
    "english": "store",
    "example_ko": "가게에 갔어요.",
    "example_en": "I went to the store."
  },
  {
    "korean": "상점",
    "english": "store/shop",
    "example_ko": "상점에서 쇼핑했어요.",
    "example_en": "I shopped at the store."
  },
  {
    "korean": "거리",
    "english": "street",
    "example_ko": "거리가 복잡해요.",
    "example_en": "The street is crowded."
  },
  {
    "korean": "스트레스",
    "english": "stress",
    "example_ko": "스트레스가 많아요.",
    "example_en": "I have a lot of stress."
  },
  {
    "korean": "스트레칭",
    "english": "stretching",
    "example_ko": "스트레칭을 하세요.",
    "example_en": "Do some stretching."
  },
  {
    "korean": "학생",
    "english": "student",
    "example_ko": "학생들이 열심히 공부해요.",
    "example_en": "The students study hard."
  },
  {
    "korean": "공부",
    "english": "study",
    "example_ko": "도서관에서 공부했어요.",
    "example_en": "I studied at the library."
  },
  {
    "korean": "과목",
    "english": "subject",
    "example_ko": "수학 과목을 좋아해요.",
    "example_en": "I like the math subject."
  },
  {
    "korean": "부하",
    "english": "subordinate",
    "example_ko": "부하 직원이 많아요.",
    "example_en": "I have many subordinates."
  },
  {
    "korean": "지하철",
    "english": "subway",
    "example_ko": "지하철을 탔어요.",
    "example_en": "I took the subway."
  },
  {
    "korean": "지하철역",
    "english": "subway station",
    "example_ko": "지하철역에서 만나요.",
    "example_en": "Let’s meet at the subway station."
  },
  {
    "korean": "성공",
    "english": "success",
    "example_ko": "성공했어요.",
    "example_en": "I succeeded."
  },
  {
    "korean": "설탕",
    "english": "sugar",
    "example_ko": "설탕을 넣었어요.",
    "example_en": "I added sugar."
  },
  {
    "korean": "여행가방",
    "english": "suitcase",
    "example_ko": "여행가방을 쌌어요.",
    "example_en": "I packed my suitcase."
  },
  {
    "korean": "여름",
    "english": "summer",
    "example_ko": "여름은 덥고 습해요.",
    "example_en": "Summer is hot and humid."
  },
  {
    "korean": "해",
    "english": "sun",
    "example_ko": "해가 밝게 떴어요.",
    "example_en": "The sun rose brightly."
  },
  {
    "korean": "일요일",
    "english": "Sunday",
    "example_ko": "일요일에는 쉬어요.",
    "example_en": "I rest on Sundays."
  },
  {
    "korean": "슈퍼마켓",
    "english": "supermarket",
    "example_ko": "슈퍼마켓에서 장을 봤어요.",
    "example_en": "I did grocery shopping at the supermarket."
  },
  {
    "korean": "영양제",
    "english": "supplement",
    "example_ko": "영양제를 먹어요.",
    "example_en": "I take supplements."
  },
  {
    "korean": "수술",
    "english": "surgery",
    "example_ko": "수술을 했어요.",
    "example_en": "I had surgery."
  },
  {
    "korean": "달다",
    "english": "sweet",
    "example_ko": "과일이 달아요.",
    "example_en": "The fruit is sweet."
  },
  {
    "korean": "수영",
    "english": "swimming",
    "example_ko": "수영을 배웠어요.",
    "example_en": "I learned swimming."
  },
  {
    "korean": "증상",
    "english": "symptom",
    "example_ko": "증상이 심해요.",
    "example_en": "The symptoms are severe."
  },
  {
    "korean": "포장",
    "english": "takeout/packing",
    "example_ko": "음식을 포장했어요.",
    "example_en": "I packed the food for takeout."
  },
  {
    "korean": "테이프",
    "english": "tape",
    "example_ko": "테이프로 고정했어요.",
    "example_en": "I fixed it with tape."
  },
  {
    "korean": "지각",
    "english": "tardiness",
    "example_ko": "지각했어요.",
    "example_en": "I was late."
  },
  {
    "korean": "업무",
    "english": "task/work",
    "example_ko": "업무가 많아요.",
    "example_en": "I have many tasks."
  },
  {
    "korean": "맛",
    "english": "taste/flavor",
    "example_ko": "맛이 좋아요.",
    "example_en": "The taste is good."
  },
  {
    "korean": "세금",
    "english": "tax",
    "example_ko": "세금을 냈어요.",
    "example_en": "I paid taxes."
  },
  {
    "korean": "택시",
    "english": "taxi",
    "example_ko": "택시를 탔어요.",
    "example_en": "I took a taxi."
  },
  {
    "korean": "택시 기사",
    "english": "taxi driver",
    "example_ko": "택시 기사와 이야기했어요.",
    "example_en": "I talked with the taxi driver."
  },
  {
    "korean": "선생님",
    "english": "teacher",
    "example_ko": "선생님이 친절하셨어요.",
    "example_en": "The teacher was kind."
  },
  {
    "korean": "기술자",
    "english": "technician",
    "example_ko": "기술자가 기계를 고쳤어요.",
    "example_en": "The technician fixed the machine."
  },
  {
    "korean": "청소년",
    "english": "teenager",
    "example_ko": "청소년들이 모였어요.",
    "example_en": "Teenagers gathered."
  },
  {
    "korean": "전화기",
    "english": "telephone",
    "example_ko": "전화기를 찾고 있어요.",
    "example_en": "I’m looking for the telephone."
  },
  {
    "korean": "텔레비전",
    "english": "television",
    "example_ko": "텔레비전을 봤어요.",
    "example_en": "I watched television."
  },
  {
    "korean": "온도",
    "english": "temperature",
    "example_ko": "온도가 너무 높아요.",
    "example_en": "The temperature is too high."
  },
  {
    "korean": "문자",
    "english": "text message",
    "example_ko": "문자를 받았어요.",
    "example_en": "I received a text message."
  },
  {
    "korean": "교과서",
    "english": "textbook",
    "example_ko": "교과서를 읽어요.",
    "example_en": "I read the textbook."
  },
  {
    "korean": "논문",
    "english": "thesis/paper",
    "example_ko": "논문을 썼어요.",
    "example_en": "I wrote a thesis."
  },
  {
    "korean": "물건",
    "english": "thing/item",
    "example_ko": "물건을 샀어요.",
    "example_en": "I bought an item."
  },
  {
    "korean": "천둥",
    "english": "thunder",
    "example_ko": "천둥이 울려요.",
    "example_en": "Thunder is rumbling."
  },
  {
    "korean": "목요일",
    "english": "Thursday",
    "example_ko": "목요일은 운동하는 날이에요.",
    "example_en": "Thursday is workout day."
  },
  {
    "korean": "표",
    "english": "ticket",
    "example_ko": "표를 샀어요.",
    "example_en": "I bought a ticket."
  },
  {
    "korean": "시간",
    "english": "time",
    "example_ko": "지금은 시간이 없어요.",
    "example_en": "I don’t have time right now."
  },
  {
    "korean": "팁",
    "english": "tip",
    "example_ko": "팁을 줬어요.",
    "example_en": "I gave a tip."
  },
  {
    "korean": "모시다",
    "english": "to accompany (honorific)",
    "example_ko": "어머니를 병원에 모셨어요.",
    "example_en": "I accompanied my mother to the hospital."
  },
  {
    "korean": "인정하다",
    "english": "to admit",
    "example_ko": "잘못을 인정했어요.",
    "example_en": "I admitted my mistake."
  },
  {
    "korean": "허락하다",
    "english": "to allow",
    "example_ko": "외출을 허락했어요.",
    "example_en": "I allowed them to go out."
  },
  {
    "korean": "신청하다",
    "english": "to apply",
    "example_ko": "대출을 신청했어요.",
    "example_en": "I applied for a loan."
  },
  {
    "korean": "도착하다",
    "english": "to arrive",
    "example_ko": "공항에 도착했어요.",
    "example_en": "I arrived at the airport."
  },
  {
    "korean": "여쭈다",
    "english": "to ask (honorific)",
    "example_ko": "질문을 여쭈었어요.",
    "example_en": "I asked a question."
  },
  {
    "korean": "다니다",
    "english": "to attend/go regularly",
    "example_ko": "학교에 다녀요.",
    "example_en": "I go to school."
  },
  {
    "korean": "피하다",
    "english": "to avoid",
    "example_ko": "문제를 피했어요.",
    "example_en": "I avoided the problem."
  },
  {
    "korean": "굽다",
    "english": "to bake/grill",
    "example_ko": "빵을 구웠어요.",
    "example_en": "I baked bread."
  },
  {
    "korean": "계시다",
    "english": "to be (honorific)",
    "example_ko": "선생님이 계세요.",
    "example_en": "The teacher is here."
  },
  {
    "korean": "쓰다",
    "english": "to be bitter",
    "example_ko": "써요.",
    "example_en": "It is bitter."
  },
  {
    "korean": "맛있다",
    "english": "to be delicious",
    "example_ko": "맛있어요.",
    "example_en": "It is delicious."
  },
  {
    "korean": "실망하다",
    "english": "to be disappointed",
    "example_ko": "시험에 실망했어요.",
    "example_en": "I was disappointed with the exam."
  },
  {
    "korean": "배부르다",
    "english": "to be full",
    "example_ko": "배부르네요.",
    "example_en": "I am full."
  },
  {
    "korean": "기뻐하다",
    "english": "to be glad",
    "example_ko": "선물을 기뻐했어요.",
    "example_en": "I was happy with the gift."
  },
  {
    "korean": "배고프다",
    "english": "to be hungry",
    "example_ko": "배고파요.",
    "example_en": "I am hungry."
  },
  {
    "korean": "슬퍼하다",
    "english": "to be sad",
    "example_ko": "영화를 보고 슬퍼했어요.",
    "example_en": "I was sad after watching the movie."
  },
  {
    "korean": "짜다",
    "english": "to be salty",
    "example_ko": "짜요.",
    "example_en": "It is salty."
  },
  {
    "korean": "시다",
    "english": "to be sour",
    "example_ko": "셔요.",
    "example_en": "It is sour."
  },
  {
    "korean": "맵다",
    "english": "to be spicy",
    "example_ko": "매워요.",
    "example_en": "It is spicy."
  },
  {
    "korean": "놀라다",
    "english": "to be surprised",
    "example_ko": "소식에 놀랐어요.",
    "example_en": "I was surprised by the news."
  },
  {
    "korean": "달다",
    "english": "to be sweet",
    "example_ko": "달아요.",
    "example_en": "It is sweet."
  },
  {
    "korean": "맛없다",
    "english": "to be tasteless",
    "example_ko": "맛없어요.",
    "example_en": "It tastes bad."
  },
  {
    "korean": "감사하다",
    "english": "to be thankful",
    "example_ko": "도움에 감사해요.",
    "example_en": "I'm thankful for the help."
  },
  {
    "korean": "시작하다",
    "english": "to begin",
    "example_ko": "회의가 시작했어요.",
    "example_en": "The meeting started."
  },
  {
    "korean": "시작되다",
    "english": "to begin (intransitive)",
    "example_ko": "수업이 시작됐어요.",
    "example_en": "The class started."
  },
  {
    "korean": "믿다",
    "english": "to believe",
    "example_ko": "그 말을 믿어요.",
    "example_en": "I believe that."
  },
  {
    "korean": "삶다",
    "english": "to boil",
    "example_ko": "계란을 삶았어요.",
    "example_en": "I boiled eggs."
  },
  {
    "korean": "끓이다",
    "english": "to boil (liquid)",
    "example_ko": "물을 끓였어요.",
    "example_en": "I boiled water."
  },
  {
    "korean": "빌리다",
    "english": "to borrow",
    "example_ko": "책을 빌렸어요.",
    "example_en": "I borrowed a book."
  },
  {
    "korean": "만들다",
    "english": "to build",
    "example_ko": "집을 만들었어요.",
    "example_en": "I built a house."
  },
  {
    "korean": "사다",
    "english": "to buy",
    "example_ko": "샀어요.",
    "example_en": "I bought it."
  },
  {
    "korean": "계산하다",
    "english": "to calculate/pay",
    "example_ko": "계산서를 받았어요.",
    "example_en": "I received the bill."
  },
  {
    "korean": "전화하다",
    "english": "to call",
    "example_ko": "친구에게 전화해요.",
    "example_en": "I call a friend."
  },
  {
    "korean": "업다",
    "english": "to carry on the back",
    "example_ko": "아이를 업었어요.",
    "example_en": "I carried the child on my back."
  },
  {
    "korean": "잡다",
    "english": "to catch",
    "example_ko": "공을 잡았어요.",
    "example_en": "I caught the ball."
  },
  {
    "korean": "바꾸다",
    "english": "to change",
    "example_ko": "계획을 바꿨어요.",
    "example_en": "I changed the plan."
  },
  {
    "korean": "청소하다",
    "english": "to clean",
    "example_ko": "방을 청소해요.",
    "example_en": "I clean the room."
  },
  {
    "korean": "닫다",
    "english": "to close",
    "example_ko": "창문을 닫아요.",
    "example_en": "I close the window."
  },
  {
    "korean": "빗다",
    "english": "to comb",
    "example_ko": "머리를 빗었어요.",
    "example_en": "I combed my hair."
  },
  {
    "korean": "오다",
    "english": "to come",
    "example_ko": "집에 와요.",
    "example_en": "I come home."
  },
  {
    "korean": "들어오다",
    "english": "to come in",
    "example_ko": "방에 들어와요.",
    "example_en": "Come into the room."
  },
  {
    "korean": "생각나다",
    "english": "to come to mind",
    "example_ko": "아이디어가 생각났어요.",
    "example_en": "An idea came to mind."
  },
  {
    "korean": "요리하다",
    "english": "to cook",
    "example_ko": "요리해요.",
    "example_en": "I cook."
  },
  {
    "korean": "식다",
    "english": "to cool down",
    "example_ko": "밥이 식었어요.",
    "example_en": "The rice cooled down."
  },
  {
    "korean": "만들다",
    "english": "to create/make",
    "example_ko": "케이크를 만들었어요.",
    "example_en": "I made a cake."
  },
  {
    "korean": "건너다",
    "english": "to cross",
    "example_ko": "길을 건넜어요.",
    "example_en": "I crossed the street."
  },
  {
    "korean": "울다",
    "english": "to cry",
    "example_ko": "아이가 울어요.",
    "example_en": "The child cries."
  },
  {
    "korean": "자르다",
    "english": "to cut",
    "example_ko": "잘랐어요.",
    "example_en": "I cut it."
  },
  {
    "korean": "춤추다",
    "english": "to dance",
    "example_ko": "춤을 춰요.",
    "example_en": "I dance."
  },
  {
    "korean": "결정하다",
    "english": "to decide",
    "example_ko": "계획을 결정했어요.",
    "example_en": "I decided the plan."
  },
  {
    "korean": "줄다",
    "english": "to decrease",
    "example_ko": "체중이 줄었어요.",
    "example_en": "My weight decreased."
  },
  {
    "korean": "튀기다",
    "english": "to deep fry",
    "example_ko": "감자를 튀겼어요.",
    "example_en": "I deep-fried potatoes."
  },
  {
    "korean": "출발하다",
    "english": "to depart",
    "example_ko": "기차가 출발했어요.",
    "example_en": "The train departed."
  },
  {
    "korean": "싫어하다",
    "english": "to dislike",
    "example_ko": "야채를 싫어해요.",
    "example_en": "I dislike vegetables."
  },
  {
    "korean": "졸다",
    "english": "to doze off",
    "example_ko": "수업 중에 졸았어요.",
    "example_en": "I dozed off during class."
  },
  {
    "korean": "마시다",
    "english": "to drink",
    "example_ko": "마셨어요.",
    "example_en": "I drank."
  },
  {
    "korean": "운전하다",
    "english": "to drive",
    "example_ko": "차를 운전해요.",
    "example_en": "I drive a car."
  },
  {
    "korean": "먹다",
    "english": "to eat",
    "example_ko": "먹었어요.",
    "example_en": "I ate."
  },
  {
    "korean": "잡수다",
    "english": "to eat (honorific)",
    "example_ko": "어르신이 식사를 잡수셨어요.",
    "example_en": "The elder had a meal."
  },
  {
    "korean": "드시다",
    "english": "to eat/drink (honorific)",
    "example_ko": "식사 드셨어요?",
    "example_en": "Did you eat?"
  },
  {
    "korean": "끝나다",
    "english": "to end",
    "example_ko": "영화가 끝났어요.",
    "example_en": "The movie ended."
  },
  {
    "korean": "끝나다",
    "english": "to end (intransitive)",
    "example_ko": "영화가 끝났어요.",
    "example_en": "The movie ended."
  },
  {
    "korean": "들어가다",
    "english": "to enter",
    "example_ko": "방에 들어갔어요.",
    "example_en": "I entered the room."
  },
  {
    "korean": "환전하다",
    "english": "to exchange money",
    "example_ko": "달러를 환전했어요.",
    "example_en": "I exchanged dollars."
  },
  {
    "korean": "운동하다",
    "english": "to exercise",
    "example_ko": "운동해요.",
    "example_en": "I exercise."
  },
  {
    "korean": "기대하다",
    "english": "to expect",
    "example_ko": "좋은 결과를 기대해요.",
    "example_en": "I expect a good result."
  },
  {
    "korean": "느끼다",
    "english": "to feel",
    "example_ko": "행복을 느껴요.",
    "example_en": "I feel happiness."
  },
  {
    "korean": "싸우다",
    "english": "to fight",
    "example_ko": "친구와 싸웠어요.",
    "example_en": "I fought with a friend."
  },
  {
    "korean": "찾다",
    "english": "to find",
    "example_ko": "열쇠를 찾아요.",
    "example_en": "I find the key."
  },
  {
    "korean": "끝내다",
    "english": "to finish (something)",
    "example_ko": "숙제를 끝냈어요.",
    "example_en": "I finished my homework."
  },
  {
    "korean": "끝나다",
    "english": "to finish/end",
    "example_ko": "일이 끝났어요.",
    "example_en": "The work ended."
  },
  {
    "korean": "고치다",
    "english": "to fix/repair",
    "example_ko": "자전거를 고쳤어요.",
    "example_en": "I fixed the bike."
  },
  {
    "korean": "금지하다",
    "english": "to forbid",
    "example_ko": "흡연을 금지했어요.",
    "example_en": "I forbade smoking."
  },
  {
    "korean": "잊다",
    "english": "to forget",
    "example_ko": "약속을 잊었어요.",
    "example_en": "I forgot the appointment."
  },
  {
    "korean": "화내다",
    "english": "to get angry",
    "example_ko": "친구에게 화냈어요.",
    "example_en": "I got angry at my friend."
  },
  {
    "korean": "내리다",
    "english": "to get off",
    "example_ko": "지하철에서 내려요.",
    "example_en": "I get off the subway."
  },
  {
    "korean": "일어나다",
    "english": "to get up",
    "example_ko": "아침 일찍 일어났어요.",
    "example_en": "I got up early in the morning."
  },
  {
    "korean": "주다",
    "english": "to give",
    "example_ko": "선물을 줘요.",
    "example_en": "I give a gift."
  },
  {
    "korean": "낳다",
    "english": "to give birth",
    "example_ko": "그녀는 아기를 낳았어요.",
    "example_en": "She gave birth to a baby."
  },
  {
    "korean": "가다",
    "english": "to go",
    "example_ko": "학교에 가요.",
    "example_en": "I go to school."
  },
  {
    "korean": "내려가다",
    "english": "to go down",
    "example_ko": "지하실로 내려갔어요.",
    "example_en": "I went down to the basement."
  },
  {
    "korean": "나가다",
    "english": "to go out",
    "example_ko": "밖에 나가요.",
    "example_en": "I go outside."
  },
  {
    "korean": "출근하다",
    "english": "to go to work",
    "example_ko": "매일 9시에 출근해요.",
    "example_en": "I go to work at 9 every day."
  },
  {
    "korean": "올라가다",
    "english": "to go up",
    "example_ko": "계단을 올라갔어요.",
    "example_en": "I went up the stairs."
  },
  {
    "korean": "듣다",
    "english": "to hear",
    "example_ko": "소리를 들었어요.",
    "example_en": "I heard a sound."
  },
  {
    "korean": "데우다",
    "english": "to heat",
    "example_ko": "음식을 데웠어요.",
    "example_en": "I heated the food."
  },
  {
    "korean": "도와주다",
    "english": "to help",
    "example_ko": "도와줘서 고마워요.",
    "example_en": "Thank you for helping me."
  },
  {
    "korean": "안다",
    "english": "to hug",
    "example_ko": "아이를 안았어요.",
    "example_en": "I hugged the child."
  },
  {
    "korean": "상상하다",
    "english": "to imagine",
    "example_ko": "미래를 상상해요.",
    "example_en": "I imagine the future."
  },
  {
    "korean": "늘다",
    "english": "to increase",
    "example_ko": "인구가 늘었어요.",
    "example_en": "The population increased."
  },
  {
    "korean": "뛰다",
    "english": "to jump",
    "example_ko": "높이 뛰었어요.",
    "example_en": "I jumped high."
  },
  {
    "korean": "웃다",
    "english": "to laugh",
    "example_ko": "친구가 웃어요.",
    "example_en": "My friend laughs."
  },
  {
    "korean": "배우다",
    "english": "to learn",
    "example_ko": "한국어를 배워요.",
    "example_en": "I learn Korean."
  },
  {
    "korean": "떠나다",
    "english": "to leave",
    "example_ko": "집을 떠났어요.",
    "example_en": "I left home."
  },
  {
    "korean": "퇴근하다",
    "english": "to leave work",
    "example_ko": "6시에 퇴근했어요.",
    "example_en": "I left work at 6."
  },
  {
    "korean": "빌려주다",
    "english": "to lend",
    "example_ko": "친구에게 돈을 빌려줬어요.",
    "example_en": "I lent money to a friend."
  },
  {
    "korean": "좋아하다",
    "english": "to like",
    "example_ko": "음악을 좋아해요.",
    "example_en": "I like music."
  },
  {
    "korean": "듣다",
    "english": "to listen",
    "example_ko": "음악을 들어요.",
    "example_en": "I listen to music."
  },
  {
    "korean": "보다",
    "english": "to look/watch",
    "example_ko": "텔레비전을 봤어요.",
    "example_en": "I watched TV."
  },
  {
    "korean": "지다",
    "english": "to lose",
    "example_ko": "게임에서 졌어요.",
    "example_en": "I lost the game."
  },
  {
    "korean": "사랑하다",
    "english": "to love",
    "example_ko": "가족을 사랑해요.",
    "example_en": "I love my family."
  },
  {
    "korean": "만들다",
    "english": "to make",
    "example_ko": "만들었어요.",
    "example_en": "I made it."
  },
  {
    "korean": "결혼하다",
    "english": "to marry",
    "example_ko": "결혼했어요.",
    "example_en": "I got married."
  },
  {
    "korean": "재다",
    "english": "to measure",
    "example_ko": "키를 쟀어요.",
    "example_en": "I measured the height."
  },
  {
    "korean": "만나다",
    "english": "to meet",
    "example_ko": "친구를 만나요.",
    "example_en": "I meet a friend."
  },
  {
    "korean": "섞다",
    "english": "to mix",
    "example_ko": "재료를 섞었어요.",
    "example_en": "I mixed the ingredients."
  },
  {
    "korean": "이사하다",
    "english": "to move (house)",
    "example_ko": "이사했어요.",
    "example_en": "I moved (house)."
  },
  {
    "korean": "필요하다",
    "english": "to need",
    "example_ko": "도움이 필요해요.",
    "example_en": "I need help."
  },
  {
    "korean": "열다",
    "english": "to open",
    "example_ko": "문을 열어요.",
    "example_en": "I open the door."
  },
  {
    "korean": "주문하다",
    "english": "to order",
    "example_ko": "주문했어요.",
    "example_en": "I ordered."
  },
  {
    "korean": "돌아가시다",
    "english": "to pass away",
    "example_ko": "할아버지가 돌아가셨어요.",
    "example_en": "My grandfather passed away."
  },
  {
    "korean": "지나가다",
    "english": "to pass by",
    "example_ko": "차가 지나갔어요.",
    "example_en": "The car passed by."
  },
  {
    "korean": "계산하다",
    "english": "to pay",
    "example_ko": "계산했어요.",
    "example_en": "I paid."
  },
  {
    "korean": "놀다",
    "english": "to play",
    "example_ko": "공원에서 놀아요.",
    "example_en": "I play at the park."
  },
  {
    "korean": "붓다",
    "english": "to pour",
    "example_ko": "물을 부었어요.",
    "example_en": "I poured water."
  },
  {
    "korean": "연습하다",
    "english": "to practice",
    "example_ko": "노래를 연습했어요.",
    "example_en": "I practiced singing."
  },
  {
    "korean": "준비하다",
    "english": "to prepare",
    "example_ko": "발표를 준비해요.",
    "example_en": "I prepare a presentation."
  },
  {
    "korean": "놓다",
    "english": "to put down",
    "example_ko": "책을 놓았어요.",
    "example_en": "I put down the book."
  },
  {
    "korean": "넣다",
    "english": "to put in",
    "example_ko": "가방에 책을 넣었어요.",
    "example_en": "I put a book in the bag."
  },
  {
    "korean": "재우다",
    "english": "to put to sleep",
    "example_ko": "아기를 재웠어요.",
    "example_en": "I put the baby to sleep."
  },
  {
    "korean": "키우다",
    "english": "to raise",
    "example_ko": "아이를 키워요.",
    "example_en": "I raise a child."
  },
  {
    "korean": "기르다",
    "english": "to raise/grow",
    "example_ko": "강아지를 길러요.",
    "example_en": "I raise a puppy."
  },
  {
    "korean": "읽다",
    "english": "to read",
    "example_ko": "책을 읽어요.",
    "example_en": "I read a book."
  },
  {
    "korean": "받다",
    "english": "to receive",
    "example_ko": "선물을 받아요.",
    "example_en": "I receive a gift."
  },
  {
    "korean": "거절하다",
    "english": "to refuse",
    "example_ko": "제안을 거절했어요.",
    "example_en": "I refused the offer."
  },
  {
    "korean": "등록하다",
    "english": "to register",
    "example_ko": "수업에 등록했어요.",
    "example_en": "I registered for the class."
  },
  {
    "korean": "기억하다",
    "english": "to remember",
    "example_ko": "이름을 기억해요.",
    "example_en": "I remember the name."
  },
  {
    "korean": "갚다",
    "english": "to repay",
    "example_ko": "빚을 갚았어요.",
    "example_en": "I repaid the debt."
  },
  {
    "korean": "부탁하다",
    "english": "to request",
    "example_ko": "부탁했어요.",
    "example_en": "I made a request."
  },
  {
    "korean": "예약하다",
    "english": "to reserve",
    "example_ko": "예약했어요.",
    "example_en": "I made a reservation."
  },
  {
    "korean": "존경하다",
    "english": "to respect",
    "example_ko": "선생님을 존경해요.",
    "example_en": "I respect my teacher."
  },
  {
    "korean": "쉬다",
    "english": "to rest",
    "example_ko": "쉬어요.",
    "example_en": "I rest."
  },
  {
    "korean": "타다",
    "english": "to ride",
    "example_ko": "버스를 타요.",
    "example_en": "I ride the bus."
  },
  {
    "korean": "달리다",
    "english": "to run",
    "example_ko": "학교에서 달려요.",
    "example_en": "I run at school."
  },
  {
    "korean": "말하다",
    "english": "to say",
    "example_ko": "진실을 말해요.",
    "example_en": "I tell the truth."
  },
  {
    "korean": "보다",
    "english": "to see",
    "example_ko": "TV를 봐요.",
    "example_en": "I watch TV."
  },
  {
    "korean": "뵙다",
    "english": "to see/meet (honorific)",
    "example_ko": "선생님을 뵈었어요.",
    "example_en": "I met the teacher."
  },
  {
    "korean": "보다",
    "english": "to see/watch",
    "example_ko": "영화를 봐요.",
    "example_en": "I watch a movie."
  },
  {
    "korean": "팔다",
    "english": "to sell",
    "example_ko": "팔았어요.",
    "example_en": "I sold it."
  },
  {
    "korean": "보내다",
    "english": "to send",
    "example_ko": "편지를 보내요.",
    "example_en": "I send a letter."
  },
  {
    "korean": "노래하다",
    "english": "to sing",
    "example_ko": "노래해요.",
    "example_en": "I sing a song."
  },
  {
    "korean": "앉다",
    "english": "to sit",
    "example_ko": "의자에 앉아요.",
    "example_en": "I sit on the chair."
  },
  {
    "korean": "앉다",
    "english": "to sit down",
    "example_ko": "의자에 앉았어요.",
    "example_en": "I sat down on the chair."
  },
  {
    "korean": "자다",
    "english": "to sleep",
    "example_ko": "일찍 자요.",
    "example_en": "I sleep early."
  },
  {
    "korean": "주무시다",
    "english": "to sleep (honorific)",
    "example_ko": "아버지가 주무세요.",
    "example_en": "My father is sleeping."
  },
  {
    "korean": "웃다",
    "english": "to smile/laugh",
    "example_ko": "친구가 웃었어요.",
    "example_en": "My friend laughed."
  },
  {
    "korean": "말하다",
    "english": "to speak",
    "example_ko": "한국어로 말해요.",
    "example_en": "I speak in Korean."
  },
  {
    "korean": "보내다",
    "english": "to spend (time)",
    "example_ko": "시간을 보내요.",
    "example_en": "I spend time."
  },
  {
    "korean": "서다",
    "english": "to stand",
    "example_ko": "여기서 서요.",
    "example_en": "I stand here."
  },
  {
    "korean": "서다",
    "english": "to stand up",
    "example_ko": "자리에서 일어났어요.",
    "example_en": "I stood up from my seat."
  },
  {
    "korean": "시작하다",
    "english": "to start",
    "example_ko": "수업을 시작해요.",
    "example_en": "The class starts."
  },
  {
    "korean": "찌다",
    "english": "to steam",
    "example_ko": "만두를 쪘어요.",
    "example_en": "I steamed dumplings."
  },
  {
    "korean": "공부하다",
    "english": "to study",
    "example_ko": "공부하고 있어요.",
    "example_en": "I am studying."
  },
  {
    "korean": "붓다",
    "english": "to swell",
    "example_ko": "발이 부었어요.",
    "example_en": "My foot swelled."
  },
  {
    "korean": "찍다",
    "english": "to take (photo)",
    "example_ko": "사진을 찍었어요.",
    "example_en": "I took a photo."
  },
  {
    "korean": "벗다",
    "english": "to take off",
    "example_ko": "신발을 벗었어요.",
    "example_en": "I took off my shoes."
  },
  {
    "korean": "빼다",
    "english": "to take out",
    "example_ko": "돈을 뺐어요.",
    "example_en": "I took out money."
  },
  {
    "korean": "말하다",
    "english": "to talk",
    "example_ko": "친구와 말해요.",
    "example_en": "I talk with a friend."
  },
  {
    "korean": "가르치다",
    "english": "to teach",
    "example_ko": "영어를 가르쳐요.",
    "example_en": "I teach English."
  },
  {
    "korean": "생각하다",
    "english": "to think",
    "example_ko": "생각해요.",
    "example_en": "I think."
  },
  {
    "korean": "만지다",
    "english": "to touch",
    "example_ko": "그림을 만져요.",
    "example_en": "I touch the picture."
  },
  {
    "korean": "훈련하다",
    "english": "to train",
    "example_ko": "강아지를 훈련했어요.",
    "example_en": "I trained the puppy."
  },
  {
    "korean": "여행하다",
    "english": "to travel",
    "example_ko": "해외여행을 해요.",
    "example_en": "I travel abroad."
  },
  {
    "korean": "열심히 하다",
    "english": "to try hard",
    "example_ko": "열심히 해요.",
    "example_en": "I try hard."
  },
  {
    "korean": "끄다",
    "english": "to turn off",
    "example_ko": "불을 껐어요.",
    "example_en": "I turned off the light."
  },
  {
    "korean": "켜다",
    "english": "to turn on",
    "example_ko": "TV를 켰어요.",
    "example_en": "I turned on the TV."
  },
  {
    "korean": "사용하다",
    "english": "to use",
    "example_ko": "컴퓨터를 사용해요.",
    "example_en": "I use a computer."
  },
  {
    "korean": "방문하다",
    "english": "to visit",
    "example_ko": "친구 집을 방문했어요.",
    "example_en": "I visited a friend's house."
  },
  {
    "korean": "기다리다",
    "english": "to wait",
    "example_ko": "버스를 기다려요.",
    "example_en": "I wait for the bus."
  },
  {
    "korean": "깨우다",
    "english": "to wake someone up",
    "example_ko": "동생을 깨웠어요.",
    "example_en": "I woke my younger sibling up."
  },
  {
    "korean": "일어나다",
    "english": "to wake up",
    "example_ko": "일찍 일어났어요.",
    "example_en": "I woke up early."
  },
  {
    "korean": "일어나다",
    "english": "to wake up/get up",
    "example_ko": "아침에 일어나요.",
    "example_en": "I wake up in the morning."
  },
  {
    "korean": "걷다",
    "english": "to walk",
    "example_ko": "공원에서 걸어요.",
    "example_en": "I walk in the park."
  },
  {
    "korean": "씻다",
    "english": "to wash",
    "example_ko": "씻었어요.",
    "example_en": "I washed it."
  },
  {
    "korean": "감다",
    "english": "to wash (hair)",
    "example_ko": "머리를 감았어요.",
    "example_en": "I washed my hair."
  },
  {
    "korean": "입다",
    "english": "to wear",
    "example_ko": "새 옷을 입었어요.",
    "example_en": "I wore new clothes."
  },
  {
    "korean": "쓰다",
    "english": "to wear (hat, glasses)",
    "example_ko": "모자를 써요.",
    "example_en": "I wear a hat."
  },
  {
    "korean": "신다",
    "english": "to wear (shoes)",
    "example_ko": "신발을 신어요.",
    "example_en": "I wear shoes."
  },
  {
    "korean": "이기다",
    "english": "to win",
    "example_ko": "경기를 이겼어요.",
    "example_en": "I won the match."
  },
  {
    "korean": "닦다",
    "english": "to wipe/brush",
    "example_ko": "이를 닦았어요.",
    "example_en": "I brushed my teeth."
  },
  {
    "korean": "일하다",
    "english": "to work",
    "example_ko": "회사에서 일해요.",
    "example_en": "I work at the company."
  },
  {
    "korean": "걱정하다",
    "english": "to worry",
    "example_ko": "건강을 걱정해요.",
    "example_en": "I worry about health."
  },
  {
    "korean": "쓰다",
    "english": "to write",
    "example_ko": "편지를 써요.",
    "example_en": "I write a letter."
  },
  {
    "korean": "쓰다",
    "english": "to write/use",
    "example_ko": "편지를 써요.",
    "example_en": "I write a letter."
  },
  {
    "korean": "오늘",
    "english": "today",
    "example_ko": "오늘 날씨가 좋아요.",
    "example_en": "The weather is good today."
  },
  {
    "korean": "내일",
    "english": "tomorrow",
    "example_ko": "내일 시험이 있어요.",
    "example_en": "I have an exam tomorrow."
  },
  {
    "korean": "치아",
    "english": "tooth",
    "example_ko": "치아가 아파요.",
    "example_en": "My tooth hurts."
  },
  {
    "korean": "칫솔",
    "english": "toothbrush",
    "example_ko": "칫솔로 이를 닦았어요.",
    "example_en": "I brushed my teeth with a toothbrush."
  },
  {
    "korean": "치약",
    "english": "toothpaste",
    "example_ko": "치약을 짰어요.",
    "example_en": "I squeezed the toothpaste."
  },
  {
    "korean": "관광버스",
    "english": "tour bus",
    "example_ko": "관광버스를 탔어요.",
    "example_en": "I took the tour bus."
  },
  {
    "korean": "관광객",
    "english": "tourist",
    "example_ko": "관광객이 많아요.",
    "example_en": "There are many tourists."
  },
  {
    "korean": "명소",
    "english": "tourist attraction",
    "example_ko": "명소를 방문했어요.",
    "example_en": "I visited a tourist attraction."
  },
  {
    "korean": "관광 안내소",
    "english": "tourist information center",
    "example_ko": "관광 안내소에서 정보를 받았어요.",
    "example_en": "I got information at the tourist center."
  },
  {
    "korean": "관광지",
    "english": "tourist spot",
    "example_ko": "유명한 관광지에 갔어요.",
    "example_en": "I went to a famous tourist spot."
  },
  {
    "korean": "수건",
    "english": "towel",
    "example_ko": "수건으로 닦았어요.",
    "example_en": "I dried myself with a towel."
  },
  {
    "korean": "무역",
    "english": "trade",
    "example_ko": "무역이 증가했어요.",
    "example_en": "Trade has increased."
  },
  {
    "korean": "전통",
    "english": "tradition",
    "example_ko": "전통을 지켜야 해요.",
    "example_en": "We must preserve traditions."
  },
  {
    "korean": "명절",
    "english": "traditional holiday",
    "example_ko": "명절에는 가족을 만나요.",
    "example_en": "We meet family on traditional holidays."
  },
  {
    "korean": "교통",
    "english": "traffic",
    "example_ko": "교통이 복잡해요.",
    "example_en": "The traffic is heavy."
  },
  {
    "korean": "신호등",
    "english": "traffic light",
    "example_ko": "신호등이 빨간색이에요.",
    "example_en": "The traffic light is red."
  },
  {
    "korean": "기차",
    "english": "train",
    "example_ko": "기차를 타고 부산에 갔어요.",
    "example_en": "I went to Busan by train."
  },
  {
    "korean": "기차역",
    "english": "train station",
    "example_ko": "기차역에서 기다렸어요.",
    "example_en": "I waited at the train station."
  },
  {
    "korean": "교통편",
    "english": "transportation",
    "example_ko": "교통편을 예약했어요.",
    "example_en": "I reserved transportation."
  },
  {
    "korean": "쓰레기통",
    "english": "trash can",
    "example_ko": "쓰레기통에 버렸어요.",
    "example_en": "I threw it in the trash can."
  },
  {
    "korean": "여행사",
    "english": "travel agency",
    "example_ko": "여행사에 문의했어요.",
    "example_en": "I contacted the travel agency."
  },
  {
    "korean": "여행자 보험",
    "english": "travel insurance",
    "example_ko": "여행자 보험에 가입했어요.",
    "example_en": "I bought travel insurance."
  },
  {
    "korean": "여행",
    "english": "travel/trip",
    "example_ko": "여행을 계획했어요.",
    "example_en": "I planned a trip."
  },
  {
    "korean": "여행자",
    "english": "traveler",
    "example_ko": "여행자가 많아요.",
    "example_en": "There are many travelers."
  },
  {
    "korean": "치료",
    "english": "treatment",
    "example_ko": "치료를 받았어요.",
    "example_en": "I received treatment."
  },
  {
    "korean": "나무",
    "english": "tree",
    "example_ko": "나무 아래에서 쉬었어요.",
    "example_en": "I rested under the tree."
  },
  {
    "korean": "화요일",
    "english": "Tuesday",
    "example_ko": "화요일에 시험이 있어요.",
    "example_en": "I have a test on Tuesday."
  },
  {
    "korean": "학비",
    "english": "tuition",
    "example_ko": "학비를 냈어요.",
    "example_en": "I paid tuition."
  },
  {
    "korean": "우산",
    "english": "umbrella",
    "example_ko": "비 와서 우산 썼어요.",
    "example_en": "I used an umbrella because it was raining."
  },
  {
    "korean": "삼촌",
    "english": "uncle",
    "example_ko": "삼촌이 선물을 줬어요.",
    "example_en": "Uncle gave a gift."
  },
  {
    "korean": "이해",
    "english": "understanding",
    "example_ko": "이해했어요.",
    "example_en": "I understood."
  },
  {
    "korean": "대학",
    "english": "university",
    "example_ko": "대학에 입학했어요.",
    "example_en": "I entered university."
  },
  {
    "korean": "업로드",
    "english": "upload",
    "example_ko": "사진을 업로드했어요.",
    "example_en": "I uploaded the photo."
  },
  {
    "korean": "USB",
    "english": "USB",
    "example_ko": "USB에 파일을 저장했어요.",
    "example_en": "I saved files on the USB."
  },
  {
    "korean": "공과금",
    "english": "utility bills",
    "example_ko": "공과금을 냈어요.",
    "example_en": "I paid utility bills."
  },
  {
    "korean": "휴가",
    "english": "vacation",
    "example_ko": "다음 주에 휴가 가요.",
    "example_en": "I’m going on vacation next week."
  },
  {
    "korean": "방학",
    "english": "school vacation",
    "example_ko": "방학 동안 쉬었어요.",
    "example_en": "I rested during the vacation."
  },
  {
    "korean": "예방접종",
    "english": "vaccination",
    "example_ko": "예방접종을 맞았어요.",
    "example_en": "I got vaccinated."
  },
  {
    "korean": "청소기",
    "english": "vacuum cleaner",
    "example_ko": "청소기로 바닥을 청소했어요.",
    "example_en": "I vacuumed the floor."
  },
  {
    "korean": "채소",
    "english": "vegetable",
    "example_ko": "채소를 많이 먹어요.",
    "example_en": "I eat a lot of vegetables."
  },
  {
    "korean": "동영상",
    "english": "video",
    "example_ko": "동영상을 봤어요.",
    "example_en": "I watched a video."
  },
  {
    "korean": "빌라",
    "english": "villa",
    "example_ko": "빌라에 이사했어요.",
    "example_en": "I moved to a villa."
  },
  {
    "korean": "마을",
    "english": "village",
    "example_ko": "작은 마을에 살아요.",
    "example_en": "I live in a small village."
  },
  {
    "korean": "식초",
    "english": "vinegar",
    "example_ko": "식초를 넣었어요.",
    "example_en": "I added vinegar."
  },
  {
    "korean": "바이올린",
    "english": "violin",
    "example_ko": "바이올린은 어려워요.",
    "example_en": "The violin is difficult."
  },
  {
    "korean": "비자",
    "english": "visa",
    "example_ko": "비자를 받았어요.",
    "example_en": "I got a visa."
  },
  {
    "korean": "배구",
    "english": "volleyball",
    "example_ko": "배구를 했어요.",
    "example_en": "I played volleyball."
  },
  {
    "korean": "산책",
    "english": "walk",
    "example_ko": "산책을 했어요.",
    "example_en": "I took a walk."
  },
  {
    "korean": "도보",
    "english": "walking",
    "example_ko": "도보로 이동했어요.",
    "example_en": "I moved by walking."
  },
  {
    "korean": "도보여행",
    "english": "walking tour",
    "example_ko": "도보여행을 했어요.",
    "example_en": "I went on a walking tour."
  },
  {
    "korean": "벽",
    "english": "wall",
    "example_ko": "벽에 그림이 걸려 있어요.",
    "example_en": "There is a painting on the wall."
  },
  {
    "korean": "지갑",
    "english": "wallet",
    "example_ko": "지갑을 잃어버렸어요.",
    "example_en": "I lost my wallet."
  },
  {
    "korean": "경고",
    "english": "warning",
    "example_ko": "경고를 받았어요.",
    "example_en": "I got a warning."
  },
  {
    "korean": "세탁기",
    "english": "washing machine",
    "example_ko": "세탁기로 빨래했어요.",
    "example_en": "I did the laundry with the washing machine."
  },
  {
    "korean": "물",
    "english": "water",
    "example_ko": "더운 날에는 시원한 물이 필요해요.",
    "example_en": "You need cool water on a hot day."
  },
  {
    "korean": "날씨",
    "english": "weather",
    "example_ko": "오늘 날씨가 정말 좋아요.",
    "example_en": "The weather is really nice today."
  },
  {
    "korean": "웹사이트",
    "english": "website",
    "example_ko": "웹사이트를 방문했어요.",
    "example_en": "I visited the website."
  },
  {
    "korean": "결혼식",
    "english": "wedding",
    "example_ko": "결혼식에 갔어요.",
    "example_en": "I went to a wedding."
  },
  {
    "korean": "수요일",
    "english": "Wednesday",
    "example_ko": "수요일에는 회의가 있어요.",
    "example_en": "There’s a meeting on Wednesday."
  },
  {
    "korean": "평일",
    "english": "weekday",
    "example_ko": "평일에는 일해요.",
    "example_en": "I work on weekdays."
  },
  {
    "korean": "주말",
    "english": "weekend",
    "example_ko": "주말에 뭐 했어요?",
    "example_en": "What did you do on the weekend?"
  },
  {
    "korean": "양식",
    "english": "Western food",
    "example_ko": "양식을 먹었어요.",
    "example_en": "I ate Western food."
  },
  {
    "korean": "와이파이",
    "english": "Wi-Fi",
    "example_ko": "와이파이가 연결됐어요.",
    "example_en": "The Wi-Fi is connected."
  },
  {
    "korean": "바람",
    "english": "wind",
    "example_ko": "바람이 시원해요.",
    "example_en": "The wind is cool."
  },
  {
    "korean": "창문",
    "english": "window",
    "example_ko": "창문을 닫았어요.",
    "example_en": "I closed the window."
  },
  {
    "korean": "와인",
    "english": "wine",
    "example_ko": "와인을 조금 마셨어요.",
    "example_en": "I drank a little wine."
  },
  {
    "korean": "겨울",
    "english": "winter",
    "example_ko": "겨울에는 눈이 와요.",
    "example_en": "It snows in winter."
  },
  {
    "korean": "여자",
    "english": "woman",
    "example_ko": "여자가 웃어요.",
    "example_en": "The woman is smiling."
  },
  {
    "korean": "근무",
    "english": "work (duty)",
    "example_ko": "주말에도 근무해요.",
    "example_en": "I work even on weekends."
  },
  {
    "korean": "일",
    "english": "work/job",
    "example_ko": "일이 많아요.",
    "example_en": "There is a lot of work."
  },
  {
    "korean": "근로자",
    "english": "worker/laborer",
    "example_ko": "근로자의 권리를 존중해야 해요.",
    "example_en": "We must respect workers' rights."
  },
  {
    "korean": "운동복",
    "english": "workout clothes",
    "example_ko": "운동복을 샀어요.",
    "example_en": "I bought workout clothes."
  },
  {
    "korean": "직장",
    "english": "workplace",
    "example_ko": "직장이 멀어요.",
    "example_en": "My workplace is far."
  },
  {
    "korean": "작가",
    "english": "writer",
    "example_ko": "작가가 책을 써요.",
    "example_en": "The writer writes a book."
  },
  {
    "korean": "년",
    "english": "year",
    "example_ko": "올해는 좋은 해예요.",
    "example_en": "This year is a good year."
  },
  {
    "korean": "어제",
    "english": "yesterday",
    "example_ko": "어제 친구를 만났어요.",
    "example_en": "I met a friend yesterday."
  },
  {
    "korean": "요가",
    "english": "yoga",
    "example_ko": "요가를 배우고 있어요.",
    "example_en": "I am learning yoga."
  },
  {
    "korean": "남동생",
    "english": "younger brother",
    "example_ko": "남동생이 축구를 해요.",
    "example_en": "My younger brother plays soccer."
  },
  {
    "korean": "동생",
    "english": "younger sibling",
    "example_ko": "동생이 학교에 가요.",
    "example_en": "My younger sibling goes to school."
  },
  {
    "korean": "여동생",
    "english": "younger sister",
    "example_ko": "여동생이 노래해요.",
    "example_en": "My younger sister sings."
  },
  {
    "korean": "누구든지",
    "english": "anyone",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "어디든지",
    "english": "anywhere",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "무엇이든지 / 뭐든지",
    "english": "anything",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "언제든지",
    "english": "anytime",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "어떻게든지",
    "english": "however / no matter how",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "아무도",
    "english": "no one",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "아무것도",
    "english": "nothing",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "아무데도",
    "english": "nowhere",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "설레다",
    "english": "to be nervous (positive)",
    "example_ko": "오늘 좋아하는 가수 콘서트가 갈 거라서 설레요.",
    "example_en": "I'm excited because I'm going to my favorite singer's concert today."
  },
  {
    "korean": "회사 면접",
    "english": "job interview",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "떨리다",
    "english": "to be nervous (negative)",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "낯설다",
    "english": "to be unfamiliar",
    "example_ko": "낯선 사람이 이야기하면 조심해!",
    "example_en": "Be careful when strangers talk to you!"
  },
  {
    "korean": "자신있다",
    "english": "to be confident",
    "example_ko": "시험 공부를 많이 해서 이번 시험에 자신있어요",
    "example_en": "I'm confident about this exam because I studied hard for it."
  },
  {
    "korean": "자신없다",
    "english": "to not be confident",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "-에/(사람)한테 만족하다",
    "english": "to be satisfied/proud",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "인상적이다",
    "english": "to be impressive/memorable",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "-에 서투르다",
    "english": "to not be good at something",
    "example_ko": "저는 젓가락질에 서툴러요",
    "example_en": "I'm not good at using chopsticks."
  },
  {
    "korean": "-에 적응하다",
    "english": "to adapt to something",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "-에, 하고, 정이 들다",
    "english": "to feel attached/affection",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "-을/를 잊지 못하다",
    "english": "to be unforgettable",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "모이다",
    "english": "to gather",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "회의",
    "english": "meeting",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "주로",
    "english": "mainly",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "간단하게",
    "english": "simply",
    "example_ko": "회의 내용을 간단하게 정리해 주세요.",
    "example_en": "Please summarize the meeting content simply."
  },
  {
    "korean": "해물 / 해산물",
    "english": "seafood",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "문어",
    "english": "octopus",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "오징어",
    "english": "calamari",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "조개",
    "english": "seashell",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "굴",
    "english": "oyster",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "게",
    "english": "crab",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "새우",
    "english": "shrimp",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "두부",
    "english": "tofu",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "콩",
    "english": "bean",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "노란색",
    "english": "yellow (noun)",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "주황색",
    "english": "orange (noun)",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "빨간색",
    "english": "red (noun)",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "보라색",
    "english": "보라색 (noun)",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "파란색",
    "english": "blue (noun)",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "초록색",
    "english": "dark green (noun)",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "여두색",
    "english": "green (noun)",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "갈색",
    "english": "brown (noun)",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "하얀색",
    "english": "white (noun)",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "회색",
    "english": "grey (noun)",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "까만색",
    "english": "black (noun)",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "계절",
    "english": "seasons (year)",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "단풍",
    "english": "fall foliage",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "겨울",
    "english": "winter",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "눈 사람",
    "english": "snowman",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "봄",
    "english": "spring",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "피다",
    "english": "to bloom (flowers)",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "여름",
    "english": "summer",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "변하다",
    "english": "to change",
    "example_ko": "책 표지의 색깔이 햇빛 때문에 변했어요",
    "example_en": "The color of the book cover changed due to sunlight."
  },
  {
    "korean": "초-",
    "english": "beginning of (time)",
    "example_ko": "다음 달 초에는 Seinäjoki에 갈 거예요",
    "example_en": "I'm going to Seinäjoki early next month"
  },
  {
    "korean": "말-",
    "english": "end of (time)",
    "example_ko": "벚꽃은 보통 3월 말부터 피어요.",
    "example_en": "Cherry blossoms usually bloom from late March."
  },
  {
    "korean": "달다",
    "english": "to wear (something that hangs)",
    "example_ko": "어두워서 옷에/가방에 달아요.",
    "example_en": "It's dark so hang it on your clothes/bag."
  },
  {
    "korean": "북쪽",
    "english": "North",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "남쪽",
    "english": "South",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "동쪽",
    "english": "East",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "서쪽",
    "english": "West",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "정리하다",
    "english": "to organize/tidy",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "모닥불",
    "english": "bonfire",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "양배추",
    "english": "cabbage",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "굽다",
    "english": "to bake/roast/grill",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "매일, 항상, 늘, 언제나",
    "english": "always, every day",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "자주",
    "english": "often",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "가끔, 종종",
    "english": "sometimes",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "잘 안",
    "english": "not often",
    "example_ko": "매운 음식을 잘 안 먹어요",
    "example_en": "tyhjä"
  },
  {
    "korean": "거의 안",
    "english": "rarely",
    "example_ko": "커피를 거의 안 마셔요",
    "example_en": "I hardly ever drink coffee"
  },
  {
    "korean": "절대 안, 전혀 안",
    "english": "never",
    "example_ko": "게임을 전혀 안 해요",
    "example_en": "I don't play games at all"
  },
  {
    "korean": "시다",
    "english": "to be sour",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "쓰다 (adj)",
    "english": "to be bitter",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "맵다",
    "english": "to be spicy",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "고소하다",
    "english": "to be nutty (taste)",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "느끼하다",
    "english": "to be oily (taste)",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "싱겁다",
    "english": "to be tasteless",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "오토바이",
    "english": "motorcycle",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "삼촌 아",
    "english": "(dad's side)",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "외할아버지",
    "english": "grandfather (mom's side)",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "외할머니",
    "english": "grandmother (mom's side)",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "이모",
    "english": "aunt (mom's side)",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "고모",
    "english": "aunt (dad's side)",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "남편",
    "english": "husband",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "아내",
    "english": "wife",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "딸",
    "english": "daughter",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "아들",
    "english": "son",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "시어머니",
    "english": "mother-in-law",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "시아버지",
    "english": "father-in-law",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "외동",
    "english": "only child",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "가깝다",
    "english": "to be near",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "멀다",
    "english": "to be far",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "높다",
    "english": "to be high",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "낮다",
    "english": "to be low",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "길다",
    "english": "to be long",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "짧다",
    "english": "to be short",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "가볍다",
    "english": "to be light",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "무겁다",
    "english": "to be heavy",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "빠르다",
    "english": "to be fast",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "느리다",
    "english": "to be slow",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "조용하다",
    "english": "to be quiet",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "시끄럽다",
    "english": "to be noisy",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "친절하다",
    "english": "to be nice",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "똑똑하다",
    "english": "to be smart",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "깨끗하다",
    "english": "to be clean",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "더럽다",
    "english": "to be dirty",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "시원하다",
    "english": "to be cool (temperature)",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "따뜻하다",
    "english": "to be warm (temperature/personality)",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "멍청하다",
    "english": "to be stupid",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "뜨겁다",
    "english": "to be hot (drink, food etc)",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "차다",
    "english": "to be cold (drink, food etc)",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "수업이 시작되다",
    "english": "to start lesson",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "재능이 있다",
    "english": "to have talent",
    "example_ko": "그림에 재능이 있다",
    "example_en": "To have a talent for drawing"
  },
  {
    "korean": "내",
    "english": "inside",
    "example_ko": "회사 내에 헬스장이 있어요",
    "example_en": "There is a gym in the company."
  },
  {
    "korean": "외",
    "english": "outside",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "새벽",
    "english": "dawn",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "휴가를 보내다",
    "english": "to spend vacation",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "장갑",
    "english": "gloves",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "늦게",
    "english": "late",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "드세요",
    "english": "eat/drink (honorific)",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "주무세요",
    "english": "sleep (honorific)",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "말씀하세요",
    "english": "speak (honorific)",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "계세요",
    "english": "being somewhere (honorific)",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "냄새나다",
    "english": "to smell (adjective)",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "생활",
    "english": "life",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "힘들다",
    "english": "to be hard/difficult",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "제일",
    "english": "most/best",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "우울하다",
    "english": "to be depressing",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "피",
    "english": "blood",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "1 년 전",
    "english": "one year ago",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  },
  {
    "korean": "1 년 후",
    "english": "one year from now",
    "example_ko": "tyhjä",
    "example_en": "tyhjä"
  }
];