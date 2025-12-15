const MBTI_TYPES = [
    "ISTJ", "ISFJ", "INFJ", "INTJ", 
    "ISTP", "ISFP", "INFP", "INTP", 
    "ESTP", "ESFP", "ENFP", "ENTP", 
    "ESTJ", "ESFJ", "ENFJ", "ENTJ"
];

const compatibilityData = {
    "INFP": { "ENFJ": 5, "ENTJ": 5, "INFP": 4, "ENFP": 4, "INFJ": 4, "INTJ": 4, "INTP": 4, "ENTP": 4, "ISFP": 1, "ESFP": 1, "ISTP": 1, "ESTP": 1, "ISFJ": 1, "ESFJ": 1, "ISTJ": 1, "ESTJ": 1 },
    "ENFP": { "INFJ": 5, "INTJ": 5, "INFP": 4, "ENFP": 4, "ENFJ": 4, "ENTJ": 4, "INTP": 4, "ENTP": 4, "ISFP": 1, "ESFP": 1, "ISTP": 1, "ESTP": 1, "ISFJ": 1, "ESFJ": 1, "ISTJ": 1, "ESTJ": 1 },
    "INFJ": { "ENFP": 5, "ENTP": 5, "INFP": 4, "INFJ": 4, "ENFJ": 4, "INTJ": 4, "INTP": 4, "ENTJ": 4, "ISFP": 1, "ESFP": 1, "ISTP": 1, "ESTP": 1, "ISFJ": 1, "ESFJ": 1, "ISTJ": 1, "ESTJ": 1 },
    "ENFJ": { "INFP": 5, "ISFP": 5, "ENFP": 4, "INFJ": 4, "ENFJ": 4, "INTJ": 4, "INTP": 4, "ENTP": 4, "ENTJ": 4, "ESFP": 1, "ISTP": 1, "ESTP": 1, "ISFJ": 1, "ESFJ": 1, "ISTJ": 1, "ESTJ": 1 },
    
    "INTJ": { "ENFP": 5, "ENTP": 5, "INFP": 4, "INFJ": 4, "ENFJ": 4, "INTJ": 4, "INTP": 4, "ENTJ": 4, "ISFP": 3, "ESFP": 3, "ISTP": 3, "ESTP": 3, "ISFJ": 2, "ESFJ": 2, "ISTJ": 3, "ESTJ": 3 },
    "ENTJ": { "INFP": 5, "INTP": 5, "ENFP": 4, "INFJ": 4, "ENFJ": 4, "INTJ": 4, "ENTP": 4, "ENTJ": 4, "ISFP": 3, "ESFP": 3, "ISTP": 3, "ESTP": 3, "ISFJ": 2, "ESFJ": 2, "ISTJ": 3, "ESTJ": 3 },
    "INTP": { "ENTJ": 5, "ESTJ": 5, "INFP": 4, "ENFP": 4, "INFJ": 4, "INTJ": 4, "INTP": 4, "ENTP": 4, "ISFP": 3, "ESFP": 3, "ISTP": 3, "ESTP": 3, "ISFJ": 2, "ESFJ": 2, "ISTJ": 2, "ENFJ": 2 },
    "ENTP": { "INFJ": 5, "INTJ": 5, "INFP": 4, "ENFP": 4, "ENFJ": 4, "INTP": 4, "ENTP": 4, "ENTJ": 4, "ISFP": 3, "ESFP": 3, "ISTP": 3, "ESTP": 3, "ISFJ": 2, "ESFJ": 2, "ISTJ": 2, "ESTJ": 2 },

    "ISFP": { "ESFJ": 5, "ESTJ": 5, "ENFJ": 5, "ISFP": 3, "ESFP": 3, "ISTP": 3, "ESTP": 3, "ISFJ": 3, "ISTJ": 3, "INFP": 1, "ENFP": 1, "INFJ": 1, "INTJ": 2, "ENTJ": 2, "INTP": 2, "ENTP": 2 },
    "ESFP": { "ISFJ": 5, "ISTJ": 5, "ISFP": 3, "ESFP": 3, "ISTP": 3, "ESTP": 3, "ESFJ": 3, "ESTJ": 3, "INFP": 1, "ENFP": 1, "INFJ": 1, "ENFJ": 1, "INTJ": 2, "ENTJ": 2, "INTP": 2, "ENTP": 2 },
    "ISTP": { "ESFJ": 5, "ESTJ": 5, "ISFP": 3, "ESFP": 3, "ISTP": 3, "ESTP": 3, "ISFJ": 3, "ISTJ": 3, "INFP": 1, "ENFP": 1, "INFJ": 1, "ENFJ": 1, "INTJ": 2, "ENTJ": 2, "INTP": 2, "ENTP": 2 },
    "ESTP": { "ISFJ": 5, "ISTJ": 5, "ISFP": 3, "ESFP": 3, "ISTP": 3, "ESTP": 3, "ESFJ": 3, "ESTJ": 3, "INFP": 1, "ENFP": 1, "INFJ": 1, "ENFJ": 1, "INTJ": 2, "ENTJ": 2, "INTP": 2, "ENTP": 2 },

    "ISFJ": { "ESFP": 5, "ESTP": 5, "ISFJ": 4, "ESFJ": 4, "ISTJ": 4, "ESTJ": 4, "ISFP": 3, "ISTP": 3, "INFP": 1, "ENFP": 1, "INFJ": 1, "ENFJ": 1, "INTJ": 2, "ENTJ": 2, "INTP": 2, "ENTP": 2 },
    "ESFJ": { "ISFP": 5, "ISTP": 5, "ISFJ": 4, "ESFJ": 4, "ISTJ": 4, "ESTJ": 4, "ESFP": 3, "ESTP": 3, "INFP": 1, "ENFP": 1, "INFJ": 1, "ENFJ": 1, "INTJ": 2, "ENTJ": 2, "INTP": 2, "ENTP": 2 },
    "ISTJ": { "ESFP": 5, "ESTP": 5, "ISFJ": 4, "ESFJ": 4, "ISTJ": 4, "ESTJ": 4, "ISFP": 3, "ISTP": 3, "INFP": 1, "ENFP": 1, "INFJ": 1, "ENFJ": 1, "INTJ": 2, "ENTJ": 2, "INTP": 2, "ENTP": 2 },
    "ESTJ": { "ISFP": 5, "ISTP": 5, "INTP": 5, "ISFJ": 4, "ESFJ": 4, "ISTJ": 4, "ESTJ": 4, "ESFP": 3, "ESTP": 3, "INFP": 1, "ENFP": 1, "INFJ": 1, "ENFJ": 1, "INTJ": 2, "ENTJ": 2, "ENTP": 2 }
};

// ⭐ 소속 및 능력 관련 상수 추가
const AFFILIATIONS = [
    "백일몽", "민간인", "재난관리국", "무명찬란교"
];
const ABILITY_RANKS = ["S", "A", "B", "C", "D", "E"];

// 성향 정의
const ALIGNMENTS = [
    "질서선", "중립선", "혼돈선", 
    "질서 중립", "완전 중립", "혼돈 중립", 
    "질서악", "중립악", "혼돈악"
];
// 성향 선호/혐오에 따른 호감도 변화 추가량 (새 로직에서 사용)
const ALIGNMENT_PREF_BONUS = 3;         // 성향 선호 시 추가 보너스
const ALIGNMENT_DISLIKED_MIN_BONUS = 1; // 성향 싫어할 때 최소 보너스

// 능력 랭크에 따른 호감도 보너스 계수
const ABILITY_MODIFIER = {
    "S": 1.2, "A": 1.1, "B": 1.0, "C": 0.9, "D": 0.8, "E": 0.7
};
// 소속 선호/혐오에 따른 호감도 변화 추가량
const AFFILIATION_BONUS = 5;
const AFFILIATION_PENALTY = -5;
// ⭐

const PLACES = [
    { id: 'apt', name: '아파트', type: 'home' },
    { id: 'mart', name: '마트', type: 'out' },
    { id: 'cafe', name: '카페', type: 'out' },
    { id: 'school', name: '학교', type: 'out' },
    { id: 'restaurant', name: '식당', type: 'out' },
    { id: 'company', name: '회사', type: 'out' },
    { id: 'travel', name: '여행지', type: 'travel' }
];

const WORD_SETS = {
    genre: ['SF', '로맨스', '추리', '무협', '판타지', '공포', '역사', '자기계발', '코미디', '드라마', '스릴러', '다큐멘터리', '모험', '음악', '액션', '스포츠'],
    food: ['김치찌개', '된장찌개', '파스타', '스테이크', '라면', '치킨', '삼겹살', '샐러드', '떡볶이', '피자', '초밥', '비빔밥', '칼국수', '돈가스', '햄버거', '샌드위치', '부대찌개', '김밥', '오므라이스'],
    hobby: ['유튜브', '넷플릭스', '게임', '음악', '영화', '홈트레이닝', '독서', '드라마', '사진 촬영', '악기 연주', '요가', '명상'],
    study: ['수학', '영어', '코딩', '철학', '경제', '역사', '디자인','일본어','중국어','프랑스어','역사','문학','심리학','예술','연극'],
    topic: ['연예인', '주식', '날씨', '취미', '과거', '미래', '고민', '맛집', '여행', '운동', '음악', '영화', '드라마'],
    destination: ['제주도', '부산', '강릉', '여수', '대전', '오사카', '도쿄', '파리', '런던', '하와이', '방콕','라스베이거스','뉴욕','로마','시드니','상하이','마카오']
};

const ACTIONS = [
    { id: 'rest', name: '휴식', place: 'apt', text: ['침대 위에서 뒹굴거렸다', '낮잠을 잤다', '멍하니 창밖을 보았다', '스마트폰을 했다'] },
    { id: 'leisure', name: '여가', place: 'apt', text: ['{hobby}을(를) 즐겼다', '새로운 취미를 찾았다'] },
    { id: 'cooking', name: '요리', place: 'apt', text: ['{food}을(를) 만들어 먹었다', '새로운 {food} 레시피를 시도했다'] },
    { id: 'work', name: '업무', place: 'company', text: ['보고서를 작성했다', '회의에 참석했다', '야근을 했다', '메일을 확인했다'] },
    { id: 'study', name: '공부', place: 'school', text: ['{study} 전공 서적을 읽었다', '과제를 수행했다', '시험 공부를 했다'] },
    { id: 'gathering', name: '모임', place: 'cafe', text: ['{topic}에 대해 수다를 떨었다', '커피를 마시며 쉬었다', '인생 상담을 했다'] },
    { id: 'read', name: '독서', place: 'apt', text: ['{genre} 소설을 읽었다', '{genre} 만화책을 봤다'] },
    { id: 'eat', name: '식사', place: 'restaurant', text: ['{food}을(를) 사 먹었다', '배부르게 밥을 먹었다'] },
    { id: 'shop', name: '쇼핑', place: 'mart', text: ['장을 봤다', '생필품을 샀다', '충동구매를 했다', '할인 상품을 샀다'] },
    { id: 'walk', name: '산책', place: 'apt', text: ['복도를 걸어다녔다', '단지 내를 산책했다', '바람을 쐬었다'] },
    { id: 'travel', name: '여행', place: 'travel', text: ['{destination}에서 즐거운 시간을 보냈다', '{destination}의 맛집을 탐방했다', '{destination}의 풍경을 구경했다'] }
];

const EVENTS = [
    { type: 'fight', name: '싸움', change: -15, text: '와(과) 사소한 문제로 크게 다투다' },
    { type: 'confess', name: '고백', change: 0, text: '에게 마음을 담아 고백했다' }, 
    { type: 'cut', name: '절교', change: -30, text: '와(과)의 연을 끊기로 했다' },
    { type: 'friend', name: '친교', change: 10, text: '와(과) 급격히 친해졌다' },
    { type: 'reconcile', name: '화해', change: 15, text: '와(과) 서로 사과하고 화해했다' },
    { type: 'breakup', name: '이별', change: 0, text: '에게 이별을 고했다' },
    { type: 'gift', name: '선물', change: 10, text: '에게 작은 선물을 주었다' }
];

let characters = [];
let day = 1;
let logs = [];
let affectionMode = false;
let isDarkMode = false;

window.onload = () => {
    initMbtiSelect();
    initRoomSelect();
    initAffiliationSelect(); 
    initAbilitySelect();     
    initAlignmentSelect();
    renderCharacterList();
    renderLocations();
    updateUI();
    
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        isDarkMode = true;
    }
};

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

function hasJongseong(char) {
    if (!char) return false;
    const code = char.charCodeAt(0);
    return (code - 0xAC00) % 28 > 0;
}

function getJosa(word, type) {
    const lastChar = word.charAt(word.length - 1);
    const has = hasJongseong(lastChar);
    
    if (type === '은/는') return has ? '은' : '는';
    if (type === '이/가') return has ? '이' : '가';
    if (type === '을/를') return has ? '을' : '를';
    if (type === '와/과') return has ? '과' : '와';
    return '';
}

function fillTemplate(text) {
    let replaced = text.replace(/{(\w+)}/g, (match, key) => {
        const words = WORD_SETS[key];
        return words ? getRandom(words) : match;
    });

    replaced = replaced.replace(/(\S+)\((은\/는|이\/가|을\/를|와\/과)\)/g, (match, word, josa) => {
        return word + getJosa(word, josa);
    });

    return replaced;
}

function calculateChemistry(mbti1, mbti2) {
    if (!compatibilityData[mbti1] || !compatibilityData[mbti1][mbti2]) return 3;
    return compatibilityData[mbti1][mbti2];
}

function getRelationshipLabel(score, specialStatus) {
    if (specialStatus === 'lover') return "💖 연인";
    if (score <= -80) return "원수";
    if (score <= -60) return "혐오";
    if (score <= -40) return "적대";
    if (score <= -20) return "불편";
    if (score < 0) return "서먹";
    if (score === 0) return "얼굴만 아는 사람";
    if (score < 10) return "아는 사람";
    if (score < 20) return "지인";
    if (score < 40) return "친구";
    if (score < 60) return "절친";
    if (score < 80) return "신뢰";
    return "소울메이트"; 
}

function getHeartHTML(score, specialStatus) {
    if (specialStatus === 'lover') {
        let html = '';
        for(let i=0; i<5; i++) html += `<i class="fa-solid fa-heart heart-lover"></i>`;
        return html;
    }
    if (score === 0) return `<i class="fa-regular fa-heart heart-empty"></i>`;
    
    let html = '';
    if (score > 0) {
        const count = Math.floor(score / 20);
        const remainder = score % 20;
        for(let i=0; i<count; i++) html += `<i class="fa-solid fa-heart heart-full"></i>`;
        if(count < 5 && remainder > 10) html += `<i class="fa-solid fa-heart heart-light"></i>`;
        else if (count === 0 && remainder > 0) html += `<i class="fa-regular fa-heart heart-light"></i>`;
    } else {
        const count = Math.floor(Math.abs(score) / 20);
        for(let i=0; i<count; i++) html += `<i class="fa-solid fa-heart-crack heart-broken"></i>`;
        if (count === 0) html += `<i class="fa-solid fa-heart-crack text-slate-300"></i>`;
    }
    return html || `<i class="fa-regular fa-heart heart-empty"></i>`;
}

function updateRelationship(charId1, charId2, amount) {
    const char1 = characters.find(c => c.id === charId1);
    if (!char1.relationships[charId2]) char1.relationships[charId2] = 0;
    char1.relationships[charId2] += amount;
    if (char1.relationships[charId2] > 100) char1.relationships[charId2] = 100;
    if (char1.relationships[charId2] < -100) char1.relationships[charId2] = -100;
}

function setSpecialStatus(charId1, charId2, status) {
    const char1 = characters.find(c => c.id === charId1);
    if (!char1.specialRelations) char1.specialRelations = {};
    if (status === null) delete char1.specialRelations[charId2];
    else char1.specialRelations[charId2] = status;
}

function getProbabilisticChange(score) {
    const rand = Math.random() * 100;
    
    if (score === 5) {
        if (rand < 50) return 10;
        if (rand < 75) return 5;
        if (rand < 90) return 0;
        return -2;
    } else if (score === 4) {
        if (rand < 25) return 10;
        if (rand < 55) return 5;
        if (rand < 80) return 0;
        if (rand < 90) return -2;
        return -5;
    } else if (score === 3) {
        if (rand < 20) return 10;
        if (rand < 45) return 5;
        if (rand < 70) return 0;
        if (rand < 95) return -2;
        return -5;
    } else if (score === 2) {
        if (rand < 10) return 10;
        if (rand < 20) return 5;
        if (rand < 45) return 0;
        if (rand < 75) return -2;
        return -5;
    } else {
        if (rand < 10) return 10;
        if (rand < 25) return 5;
        if (rand < 50) return 0;
        if (rand < 75) return -3;
        return -5;
    }
}

// ⭐ 특정 캐릭터의 동거인(들)을 반환하는 보조 함수
function getRoommates(charId) {
    const char = characters.find(c => c.id === charId);
    if (!char) return [];
    
    return characters.filter(c => c.room === char.room && c.id !== charId);
}

// ⭐ 능력 및 소속 보너스를 적용하여 최종 호감도 변화량을 계산하는 함수
function getFinalAffectionChange(actor, target, baseChange) {
    let finalChange = baseChange;
    
    // 1. 행위자(Actor)의 능력 보너스 적용
    const abilityMod = ABILITY_MODIFIER[actor.ability] || 1.0;
    if (finalChange > 0) {
        // 긍정적 변화 시: 능력치가 높을수록 증가 폭 커짐
        finalChange = Math.round(finalChange * abilityMod);
    } else if (finalChange < 0) {
        // 부정적 변화 시: 능력치가 높을수록 감소 폭 작아짐 (분모에 적용)
        finalChange = Math.round(finalChange / abilityMod);
    }

    // [삭제] 2. 소속 선호/혐오 보너스/페널티 적용 (초기 설정 로직으로 대체되었으므로 삭제)
    /*
    if (actor.preferredAffiliation && actor.preferredAffiliation === target.affiliation) {
        finalChange += AFFILIATION_BONUS;
    }
    if (actor.dislikedAffiliation && actor.dislikedAffiliation === target.affiliation) {
        finalChange += AFFILIATION_PENALTY;
    }
    */
    // ⭐ 2. 성향 선호/혐오 보너스/페널티 적용 (호감도 상승 시에만 적용)
    if (baseChange > 0) { 
        // 행위자(Actor)가 대상(Target)의 성향을 선호하는 경우
        if (actor.preferredAlignment && actor.preferredAlignment === target.alignment) {
            finalChange += ALIGNMENT_PREF_BONUS; // +3
        }
        // 행위자(Actor)가 대상(Target)의 성향을 싫어하는 경우
        else if (actor.dislikedAlignment && actor.dislikedAlignment === target.alignment) {
            finalChange += ALIGNMENT_DISLIKED_MIN_BONUS; // +1
        }
    }
    // ⭐

    // 최종 변화량의 상한/하한 조정 (너무 극단적인 변화 방지)
    if (finalChange > 20) finalChange = 20;
    if (finalChange < -20) finalChange = -20;
    
    return finalChange;
}
// ⭐

function nextDay(isBulk = false) { 
    if (characters.length === 0) {
        alert("최소 1명의 캐릭터가 필요합니다.");
        return;
    }
    
    const dailyLogs = [];
    
    characters.forEach(c => c.interactionGroup = null);

    characters.forEach(char => {
        const isExtrovert = char.mbti[0] === 'E';
        const chanceToGoOut = isExtrovert ? 0.6 : 0.3;
        
        if (Math.random() < chanceToGoOut) {
            const places = PLACES.filter(p => p.type === 'out');
            char.currentLocation = getRandom(places).id;
        } else {
            char.currentLocation = 'apt';
        }
    });

    const locationMap = {};
    characters.forEach(char => {
        if (!locationMap[char.currentLocation]) locationMap[char.currentLocation] = [];
        locationMap[char.currentLocation].push(char);
    });

    for (const locId in locationMap) {
        const people = locationMap[locId];
        people.sort(() => Math.random() - 0.5);

        while (people.length > 0) {
            let groupSize = 1;
            const rand = Math.random();
            if (people.length >= 4 && rand < 0.1) groupSize = 4;
            else if (people.length >= 3 && rand < 0.25) groupSize = 3;
            else if (people.length >= 2 && rand < 0.7) groupSize = 2;
            
            const potentialGroup = [];
            for(let i=0; i<groupSize; i++) {
                if(people.length > 0) potentialGroup.push(people.pop());
            }

            if (potentialGroup.length > 1) {
                let lowestRel = 100;
                for(let i=0; i<potentialGroup.length; i++) {
                    for(let j=i+1; j<potentialGroup.length; j++) {
                        const rel = potentialGroup[i].relationships[potentialGroup[j].id] || 0;
                        if (rel < lowestRel) lowestRel = rel;
                    }
                }
                
                let avoidChance = 0;
                if (lowestRel < -50) avoidChance = 0.8;
                else if (lowestRel < -20) avoidChance = 0.5;
                else if (lowestRel < 0) avoidChance = 0.2;

                if (Math.random() < avoidChance) {
                    potentialGroup.forEach(char => {
                        let uncomfortableTarget = null;
                        let minVal = 0;
                        
                        potentialGroup.forEach(peer => {
                            if (char.id === peer.id) return;
                            const rel = char.relationships[peer.id] || 0;
                            if (rel < minVal) {
                                minVal = rel;
                                uncomfortableTarget = peer;
                            }
                        });

                        let actionPool = ACTIONS.filter(a => {
                            if (locId === 'apt') return a.place === 'apt';
                            return PLACES.find(p=>p.id === locId).name.includes(a.place) || a.place === locId || a.place === 'out';
                        });
                        if (actionPool.length === 0) actionPool = ACTIONS.filter(a => a.place === 'out');
                        if (locId === 'apt') actionPool = ACTIONS.filter(a => a.place === 'apt');

                        const action = getRandom(actionPool);
                        const processedText = fillTemplate(getRandom(action.text));
                        char.currentAction = action.name;

                        let logText = "";
                        if (uncomfortableTarget) {
                            logText = `${char.name}${getJosa(char.name, '은/는')} ${uncomfortableTarget.name}${getJosa(uncomfortableTarget.name, '이/가')} 불편해 자리를 피했다. ${getLocationName(locId)}에서 홀로 ${processedText}.`;
                        } else {
                            logText = `${char.name}${getJosa(char.name, '은/는')} 어색한 분위기를 피해 ${getLocationName(locId)}에서 홀로 ${processedText}.`;
                        }
                        
                        dailyLogs.push({ text: logText, type: 'solo' });
                    });
                    continue; 
                }
            }

            const group = potentialGroup;
            const actor = group[0];
            const groupId = Date.now() + Math.random();

            let isTravel = false;
            if (group.length >= 2) {
                let minRel = 100;
                for(let i=0; i<group.length; i++) {
                    for(let j=i+1; j<group.length; j++) {
                        const s = group[i].relationships[group[j].id] || 0;
                        if (s < minRel) minRel = s;
                    }
                }
                if (minRel >= 50 && Math.random() < 0.2) isTravel = true;
            }

            if (group.length > 1) {
                group.forEach(m => m.interactionGroup = groupId);
            }

            if (group.length === 1) {
                let actionPool = ACTIONS.filter(a => {
                    if (locId === 'apt') return a.place === 'apt';
                    return PLACES.find(p=>p.id === locId).name.includes(a.place) || a.place === locId || a.place === 'out';
                });
                if (actionPool.length === 0) actionPool = ACTIONS.filter(a => a.place === 'out');
                if (locId === 'apt') actionPool = ACTIONS.filter(a => a.place === 'apt');

                const action = getRandom(actionPool);
                const processedText = fillTemplate(getRandom(action.text));
                
                actor.currentAction = action.name;
                dailyLogs.push({ text: `${actor.name}${getJosa(actor.name, '은/는')} ${getLocationName(locId)}에서 ${processedText}.`, type: 'solo' });
            
            } else if (group.length === 2) {
                const target = group[1];
                
                if (Math.random() < 0.15 && !isTravel) {
                    const evt = getRandom(EVENTS);
                    const chemistryScore = calculateChemistry(actor.mbti, target.mbti);
                    const currentScore = actor.relationships[target.id] || 0;
                    const isLovers = actor.specialRelations?.[target.id] === 'lover';
                    let logText = "";

                    if (evt.type === 'reconcile') {
                        const actorHates = actor.relationships[target.id] < 0;
                        const targetHates = target.relationships[actor.id] < 0;
                        
                        if (actorHates || targetHates) {
                             updateRelationship(actor.id, target.id, 15); updateRelationship(target.id, actor.id, 15);
                             logText = `[${evt.name}] ${actor.name}${getJosa(actor.name, '와/과')} ${target.name}${getJosa(target.name, '은/는')} 서로 사과하고 화해했다.`;
                             actor.currentAction = evt.name; target.currentAction = `${evt.name}`;
                             dailyLogs.push({ text: logText, type: 'event' });
                        } else {
                             updateRelationship(actor.id, target.id, 5); updateRelationship(target.id, actor.id, 5);
                             logText = `${actor.name}${getJosa(actor.name, '와/과')} ${target.name}${getJosa(target.name, '은/는')} 사이좋게 대화를 나눴다.`;
                             actor.currentAction = "대화"; target.currentAction = "대화";
                             dailyLogs.push({ text: logText, type: 'social' });
                        }
                    } 
                    else if (evt.type === 'confess') {
                        // 미성년자 나이 차이 로직은 유지
                        if (actor.isMinor !== target.isMinor) {
                            updateRelationship(actor.id, target.id, 2); updateRelationship(target.id, actor.id, 2);
                            logText = `${actor.name}${getJosa(actor.name, '은/는')} ${target.name}에게 호감이 있지만, 나이 차이를 의식해 마음을 접었다.`;
                            actor.currentAction = "대화"; target.currentAction = "대화";
                            dailyLogs.push({ text: logText, type: 'social' });
                            
                        } else {
                            const actorRoommates = getRoommates(actor.id);
                            const targetRoommates = getRoommates(target.id);
                            const isRoommateConfess = actor.room === target.room && actorRoommates.length > 0 && targetRoommates.length > 0;
                            const isLover = isLovers; // 기존 연인 여부

                            if (isLover) {
                                // 4. 기존 연인 관계 로직 (유지)
                                updateRelationship(actor.id, target.id, 5); updateRelationship(target.id, actor.id, 5);
                                logText = `[사랑] ${actor.name}${getJosa(actor.name, '은/는')} ${target.name}에게 다시 사랑을 맹세했다.`;
                            } 
                            // ⭐ 3-2. 동거인끼리 고백 (무조건 성공)
                            else if (isRoommateConfess) {
                                setSpecialStatus(actor.id, target.id, 'lover'); setSpecialStatus(target.id, actor.id, 'lover');
                                updateRelationship(actor.id, target.id, 15); updateRelationship(target.id, actor.id, 15);
                                logText = `[동거인 사랑] ${actor.name}${getJosa(actor.name, '이/가')} ${target.name}에게 고백했고, 둘은 방에서 연인이 되었다! 💖`;
                            }
                            // ⭐ 3-1B. 고백하는 쪽에 동거인 있음 (중단)
                            else if (actorRoommates.length > 0 && actor.room !== target.room) {
                                const roommate = getRandom(actorRoommates);
                                // 3-1B: 고백 중단 로그
                                logText = `[동거인 난입] ${actor.name}${getJosa(actor.name, '이/가')} ${target.name}에게 고백하려던 순간, 동거인(${roommate.name})${getJosa(roommate.name, '이/가')} 나타나 ${actor.name}을(를) 강제로 끌고 갔다.`;
                                // 3-1B 후속: 동거인 호감도 하락
                                updateRelationship(target.id, roommate.id, -5); 
                                logs.push({ text: `[배신감] 동거인 ${roommate.name}${getJosa(roommate.name, '이/가')} ${actor.name}의 행동에 배신감을 느꼈다. (호감도 -5)`, type: 'event' });
                            }
                            // ⭐ 3-1A. 고백 받는 쪽에 동거인 있음 (거절)
                            else if (targetRoommates.length > 0 && actor.room !== target.room) {
                                const roommate = getRandom(targetRoommates);
                                // 3-1A: 고백 거절 로그
                                logText = `[동거인 의식] ${target.name}${getJosa(target.name, '은/는')} ${actor.name}${getJosa(actor.name, '의')} 마음을 확인하려던 순간, 동거인(${roommate.name})${getJosa(roommate.name, '이/가')} 신경 쓰여 고백을 거절했다.`;
                                // 3-1A 후속: 동거인 호감도 하락
                                updateRelationship(target.id, roommate.id, -5); 
                                logs.push({ text: `[배신감] 동거인 ${roommate.name}${getJosa(roommate.name, '이/가')} ${target.name}의 행동에 배신감을 느꼈다. (호감도 -5)`, type: 'event' });
                            }
                            // ⭐ 3. 기타 일반 고백 로직 (기존 로직 유지)
                            else if (currentScore > 50) {
                                const chemBonus = (chemistryScore - 3) * 0.05;
                                const successChance = 0.4 + (currentScore/200) + chemBonus;
                                if (Math.random() < successChance) {
                                    setSpecialStatus(actor.id, target.id, 'lover'); setSpecialStatus(target.id, actor.id, 'lover');
                                    updateRelationship(actor.id, target.id, 15); updateRelationship(target.id, actor.id, 15);
                                    logText = `[고백 성공] ${actor.name}${getJosa(actor.name, '은/는')} ${target.name}에게 고백했고, 연인이 되었다! 💖`;
                                } else {
                                    updateRelationship(actor.id, target.id, -5); updateRelationship(target.id, actor.id, -2);
                                    logText = `[고백 실패] ${actor.name}${getJosa(actor.name, '은/는')} ${target.name}에게 차였다...`;
                                }
                            } else {
                                logText = `[고백 포기] ${actor.name}${getJosa(actor.name, '은/는')} ${target.name}에게 고백하려다 참았다.`;
                            }
                            actor.currentAction = evt.name; target.currentAction = `(대상) ${evt.name}`;
                            dailyLogs.push({ text: logText, type: 'event' });
                        }
                    }
                    else if (evt.type === 'breakup') {
                        if (isLovers) {
                            if (Math.random() < 0.3 - (currentScore/200)) {
                                setSpecialStatus(actor.id, target.id, null); setSpecialStatus(target.id, actor.id, null);
                                updateRelationship(actor.id, target.id, -25); updateRelationship(target.id, actor.id, -25);
                                logText = `[이별] ${actor.name}${getJosa(actor.name, '와/과')} ${target.name}${getJosa(target.name, '은/는')} 헤어졌다. 💔`;
                            } else {
                                updateRelationship(actor.id, target.id, 2);
                                logText = `[위기] ${actor.name}${getJosa(actor.name, '와/과')} ${target.name}${getJosa(target.name, '은/는')} 다퉜지만 헤어지지 않았다.`;
                            }
                        } else {
                            updateRelationship(actor.id, target.id, -5);
                            logText = `${actor.name}${getJosa(actor.name, '은/는')} ${target.name}${getJosa(target.name, '와/과')} 거리를 두기로 했다.`;
                        }
                        actor.currentAction = evt.name; target.currentAction = `${evt.name}`;
                        dailyLogs.push({ text: logText, type: 'event' });
                        
                    }
                    else if (evt.type === 'cut') {
                        if (isLovers) {
                            updateRelationship(actor.id, target.id, -30); updateRelationship(target.id, actor.id, -30);
                            logText = `[권태] ${actor.name}${getJosa(actor.name, '와/과')} ${target.name}의 사이가 소원해졌다.`;
                            actor.currentAction = "권태"; target.currentAction = "권태";
                            dailyLogs.push({ text: logText, type: 'event' });
                        } else {
                            updateRelationship(actor.id, target.id, -30); updateRelationship(target.id, actor.id, -30);
                            logText = `[절교] ${actor.name}${getJosa(actor.name, '와/과')} ${target.name}의 사이가 멀어졌다.`;
                            actor.currentAction = "절교"; target.currentAction = "절교";
                            dailyLogs.push({ text: logText, type: 'event' });
                        }
                    } 
                    else {
                        let c1 = evt.change + Math.floor(Math.random()*5);
                        let c2 = evt.change + Math.floor(Math.random()*5);
                        updateRelationship(actor.id, target.id, c1);
                        updateRelationship(target.id, actor.id, c2);
                        logText = `[${evt.name}] ${actor.name}${getJosa(actor.name, '은/는')} ${target.name}${evt.text}.`;
                        actor.currentAction = evt.name; target.currentAction = `${evt.name}`;
                        dailyLogs.push({ text: logText, type: 'event' });
                    }
                } 
                else {
                    let action = null;
                    if (isTravel) {
                        action = ACTIONS.find(a => a.id === 'travel');
                        group.forEach(m => m.currentLocation = 'travel');
                    } else {
                        let actionPool = ACTIONS.filter(a => {
                            if (locId === 'apt') return a.place === 'apt';
                            return PLACES.find(p=>p.id === locId).name.includes(a.place) || a.place === locId || a.place === 'out';
                        });
                        if (actionPool.length === 0) actionPool = ACTIONS.filter(a => a.place === 'out');
                        if (locId === 'apt') actionPool = ACTIONS.filter(a => a.place === 'apt');
                        action = getRandom(actionPool);
                    }

                    const processedText = fillTemplate(getRandom(action.text));
                    const chemistryScore = calculateChemistry(actor.mbti, target.mbti);
                    
                    // ⭐ 능력 및 소속 보너스 적용
                    const baseChange1 = getProbabilisticChange(chemistryScore);
                    const baseChange2 = getProbabilisticChange(chemistryScore);
                    const finalChange1 = getFinalAffectionChange(actor, target, baseChange1);
                    const finalChange2 = getFinalAffectionChange(target, actor, baseChange2);
                    
                    updateRelationship(actor.id, target.id, finalChange1);
                    updateRelationship(target.id, actor.id, finalChange2);
                    // ⭐

                    actor.currentAction = action.name;
                    target.currentAction = `함께 ${action.name}`;

                    dailyLogs.push({ text: `${actor.name}${getJosa(actor.name, '와/과')} ${target.name}${getJosa(target.name, '은/는')} ${isTravel ? '여행을 떠나' : getLocationName(locId)+'에서'} ${processedText}.`, type: isTravel ? 'event' : 'social' });
                }

            } else { // 3인 이상 그룹 상호작용
                let action = null;
                if (isTravel) {
                    action = ACTIONS.find(a => a.id === 'travel');
                    group.forEach(m => m.currentLocation = 'travel');
                } else {
                    let actionPool = ACTIONS.filter(a => ['eat', 'gathering', 'leisure', 'shop', 'travel'].includes(a.id));
                    actionPool = actionPool.filter(a => {
                        if (locId === 'apt') return a.place === 'apt';
                        return PLACES.find(p=>p.id === locId).name.includes(a.place) || a.place === locId || a.place === 'out';
                    });
                    if(actionPool.length === 0) actionPool = [ACTIONS[0]];
                    action = getRandom(actionPool);
                }

                const processedText = fillTemplate(getRandom(action.text));
                const names = group.map(m => m.name).join(', ');
                
                for(let i=0; i<group.length; i++) {
                    group[i].currentAction = isTravel ? action.name : `함께 ${action.name}`;
                    for(let j=0; j<group.length; j++) {
                        if(i === j) continue;
                        
                        const actor = group[i];
                        const target = group[j];
                        const chem = calculateChemistry(actor.mbti, target.mbti);
                        
                        // ⭐ 능력 및 소속 보너스 적용
                        const baseChange = getProbabilisticChange(chem);
                        const finalChange = getFinalAffectionChange(actor, target, baseChange);
                        
                        updateRelationship(actor.id, target.id, finalChange);
                        // ⭐
                    }
                }

                dailyLogs.push({ 
                    text: `${names}${getJosa(group[group.length-1].name, '은/는')} ${isTravel ? '여행을 떠나' : getLocationName(locId)+'에서'} 함께 ${processedText}.`, 
                    type: isTravel ? 'event' : 'social' 
                });
            }
        }
    }

logs = [...dailyLogs, ...logs];
    
    // ⭐ isBulk가 false일 때만 로그를 화면에 출력 (매일 클릭 시)
    if (!isBulk) { 
        renderLogs(dailyLogs);
    } 
    
    // [삭제] renderStatusTable();  
    // [삭제] renderLocations();    
    // [삭제] updateUI();          
    
    return dailyLogs; 
} 

// ⭐ 하루 진행 버튼의 새로운 로직 진입점
function handleNextDayClick() {
    // 1. 하루 진행 로직 실행
    nextDay(false); 

    // ⭐⭐⭐ [추가] nextDay() 호출 후, 날짜를 1일 증가시킵니다. ⭐⭐⭐
    day++; 

    // 2. UI 업데이트
    renderStatusTable(); 
    renderLocations();
    updateUI();
}

function nextWeek() {
    if (characters.length === 0) {
        alert("최소 1명의 캐릭터가 필요합니다.");
        return;
    }
    if (!confirm("7일간 시뮬레이션을 진행하시겠습니까?")) {
        return;
    }

    const allWeeklyLogs = [];
    const startDay = day; // 현재 날짜 (n일차)를 기준으로 시작

// 7번 반복하며 nextDay 함수 호출
    for (let i = 0; i < 7; i++) {
    const dailyLogs = nextDay(true); // nextDay는 이제 day++를 하지 않습니다.

    // ⭐⭐⭐ [추가] dailyLogs를 얻은 후 날짜를 증가시킵니다. ⭐⭐⭐
    day++; 
    
    // 로그 기록은 증가된 날짜를 사용해야 하므로, day-- 대신 i를 사용하여 시작 날짜 보정
    const logDay = day - 1; // 로직이 실행된 날짜 (day++ 이전)
    
    allWeeklyLogs.push({
        day: logDay, // ⭐ 날짜는 증가된 날짜를 사용합니다.
        logs: dailyLogs
    });
}

    // 일주일 치 로그를 한 번에 화면에 출력
    renderWeeklyLogs(allWeeklyLogs);
    
    // ⭐ 7일치 로직이 모두 끝난 후 UI를 한 번 업데이트합니다.
    renderStatusTable();
    renderLocations();
    updateUI(); 
}

// 일주일치 로그를 모아서 한 번에 출력하는 함수
function renderWeeklyLogs(weeklyLogs) {
    const container = document.getElementById('log-container');
    if (container.querySelector('.italic')) container.innerHTML = '';
    

    weeklyLogs.forEach(dayLog => {
        const dayDiv = document.createElement('div');
        dayDiv.className = "mb-6 animate-[fadeIn_0.5s_ease-out]";
        dayDiv.innerHTML = `<div class="flex items-center gap-2 mb-3"><div class="h-px bg-slate-300 dark:bg-slate-600 flex-1"></div><span class="text-xs font-bold text-slate-400 uppercase tracking-wider">${dayLog.day}일차</span><div class="h-px bg-slate-300 dark:bg-slate-600 flex-1"></div></div>`;
        
        dayLog.logs.forEach(log => {
            const p = document.createElement('div');
            let styleClass = "text-slate-600 dark:text-slate-300 border-l-2 border-slate-300 pl-3 py-1";
            if (log.type === 'event') styleClass = "text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-brand-900/30 border-l-4 border-brand-500 pl-3 py-2 rounded-r-lg font-medium";
            if (log.type === 'social') styleClass = "text-slate-700 dark:text-slate-200 border-l-2 border-yellow-400 pl-3 py-1 bg-yellow-50/50 dark:bg-transparent";
            p.className = `mb-2 text-sm ${styleClass}`;
            p.textContent = log.text;
            dayDiv.appendChild(p);
        });
        
        container.insertBefore(dayDiv, container.firstChild);
    });
}


function getLocationName(id) {
    const p = PLACES.find(x => x.id === id);
    return p ? p.name : id;
}

function addCharacter() {
    if (characters.length >= 30) return alert("최대 30명까지만 가능합니다.");
    
    // 기존 입력 필드 가져오기
    const nameInput = document.getElementById('input-name');
    const mbtiInput = document.getElementById('input-mbti');
    const roomInput = document.getElementById('input-room');
    const isMinorInput = document.getElementById('input-minor');
    const affiliationInput = document.getElementById('input-affiliation');
    const preferredAffiliationInput = document.getElementById('input-pref-affiliation');
    const dislikedAffiliationInput = document.getElementById('input-disliked-affiliation');
    const abilityInput = document.getElementById('input-ability');
    const alignmentInput = document.getElementById('input-alignment');
    const preferredAlignmentInput = document.getElementById('input-pref-alignment');
    const dislikedAlignmentInput = document.getElementById('input-disliked-alignment');
    
    // ⭐ [추가] 사진 입력 필드 가져오기
    const profileImgInput = document.getElementById('input-profile-img');

    const name = nameInput.value.trim();
    if (!name) return alert("이름을 입력해주세요.");
    if (characters.some(c => c.name === name)) return alert("이미 존재하는 이름입니다.");
    
    let room = roomInput.value;
    if (room === 'auto') {
        room = findEmptyRoom();
        if (!room) return alert("빈 방이 없습니다.");
    } else if (getRoomCount(room) >= 4) return alert("해당 방은 정원 초과입니다.");

    // 데이터 저장 로직 (사진 처리 후 실행)
    const saveCharData = (imgData) => {
        characters.push({
            id: Date.now().toString() + Math.random().toString(36).substring(2, 7),
            name: name, 
            mbti: mbtiInput.value, 
            room: room,
            isMinor: isMinorInput.checked,
            profileImage: imgData, // ⭐ 사진 데이터 저장

            affiliation: affiliationInput.value,
            preferredAffiliation: preferredAffiliationInput.value === 'none' ? null : preferredAffiliationInput.value,
            dislikedAffiliation: dislikedAffiliationInput.value === 'none' ? null : dislikedAffiliationInput.value,
            ability: abilityInput.value,
            
            alignment: alignmentInput.value,
            preferredAlignment: preferredAlignmentInput.value === 'none' ? null : preferredAlignmentInput.value,
            dislikedAlignment: dislikedAlignmentInput.value === 'none' ? null : dislikedAlignmentInput.value,

            currentLocation: 'apt', 
            currentAction: '-', 
            relationships: {}, 
            specialRelations: {}
        });

        // 소속/성향 관계 로직 (기존 유지)
        const newChar = characters[characters.length - 1];
        const AFFILIATION_INIT_BONUS = 30; 
        const AFFILIATION_INIT_PENALTY = -20;

        characters.forEach(existingChar => {
            if (existingChar.id === newChar.id) return;
            if (existingChar.preferredAffiliation && existingChar.preferredAffiliation === newChar.affiliation) {
                updateRelationship(existingChar.id, newChar.id, AFFILIATION_INIT_BONUS);
            } else if (existingChar.dislikedAffiliation && existingChar.dislikedAffiliation === newChar.affiliation) {
                updateRelationship(existingChar.id, newChar.id, AFFILIATION_INIT_PENALTY);
            }
            if (newChar.preferredAffiliation && newChar.preferredAffiliation === existingChar.affiliation) {
                updateRelationship(newChar.id, existingChar.id, AFFILIATION_INIT_BONUS);
            } else if (newChar.dislikedAffiliation && newChar.dislikedAffiliation === existingChar.affiliation) {
                updateRelationship(newChar.id, existingChar.id, AFFILIATION_INIT_PENALTY);
            }
        });

        // 입력창 초기화
        nameInput.value = '';
        isMinorInput.checked = false;
        if(profileImgInput) profileImgInput.value = ''; 
        renderCharacterList(); renderLocations(); updateUI();
    };

    // ⭐ 사진 파일 읽기
    const file = profileImgInput && profileImgInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => saveCharData(e.target.result);
        reader.readAsDataURL(file);
    } else {
        saveCharData(null); // 사진 없으면 null
    }
}

function removeCharacter(id) {
    if (!confirm("삭제하시겠습니까?")) return;
    characters = characters.filter(c => c.id !== id);
    characters.forEach(c => {
        delete c.relationships[id];
        if(c.specialRelations) delete c.specialRelations[id];
    });
    renderCharacterList(); renderLocations(); updateUI();
}

function findEmptyRoom() {
    const counts = {};
    for (let f=1; f<=5; f++) for (let r=1; r<=6; r++) counts[`${f}0${r}`] = 0;
    characters.forEach(c => { if (counts[c.room] !== undefined) counts[c.room]++; });
    const sorted = Object.keys(counts).sort((a,b) => counts[a] - counts[b]);
    return counts[sorted[0]] >= 4 ? null : sorted[0];
}

function getRoomCount(roomNum) { return characters.filter(c => c.room === roomNum).length; }

function initMbtiSelect() {
    const sel = document.getElementById('input-mbti');
    MBTI_TYPES.forEach(t => { const opt = document.createElement('option'); opt.value = t; opt.text = t; sel.appendChild(opt); });
}
function initRoomSelect() {
    const sel = document.getElementById('input-room');
    for (let f=1; f<=5; f++) for (let r=1; r<=6; r++) { const opt = document.createElement('option'); opt.value = `${f}0${r}`; opt.text = `${f}0${r}호`; sel.appendChild(opt); }
}

// ⭐ 소속 입력 필드 초기화 함수
function initAffiliationSelect() {
    const preferredAffiliationInput = document.getElementById('input-pref-affiliation');
    const dislikedAffiliationInput = document.getElementById('input-disliked-affiliation');
    
    [preferredAffiliationInput, dislikedAffiliationInput].forEach(sel => {
        sel.innerHTML = '';
        const optNone = document.createElement('option');
        optNone.value = 'none';
        optNone.text = '선택 안함';
        optNone.selected = true;
        sel.appendChild(optNone);

        AFFILIATIONS.forEach(t => { 
            const opt = document.createElement('option'); 
            opt.value = t; 
            opt.text = t; 
            sel.appendChild(opt); 
        });
    });

    // 소속 (필수값) 초기화
    const mainSel = document.getElementById('input-affiliation');
    mainSel.innerHTML = '';
    AFFILIATIONS.forEach(t => {
        const opt = document.createElement('option');
        opt.value = t;
        opt.text = t;
        mainSel.appendChild(opt);
    });
}

// ⭐ 능력 입력 필드 초기화 함수
function initAbilitySelect() {
    const sel = document.getElementById('input-ability');
    ABILITY_RANKS.forEach(t => { 
        const opt = document.createElement('option'); 
        opt.value = t; 
        opt.text = t; 
        if (t === 'B') opt.selected = true; // B 랭크를 기본값으로
        sel.appendChild(opt); 
    });
}

// ⭐ 성향 입력 필드 초기화 함수
function initAlignmentSelect() {
    const alignmentSelects = document.querySelectorAll('.alignment-select');
    const mainSel = document.getElementById('input-alignment');
    const preferredAlignmentInput = document.getElementById('input-pref-alignment');
    const dislikedAlignmentInput = document.getElementById('input-disliked-alignment');

    const alignmentsWithNone = ['선택 안함', ...ALIGNMENTS];

    // 선호/싫어하는 성향 드롭다운 초기화 (선택 안함 옵션 포함)
    [preferredAlignmentInput, dislikedAlignmentInput].forEach(sel => {
        sel.innerHTML = '';
        alignmentsWithNone.forEach((t, index) => { 
            const opt = document.createElement('option'); 
            opt.value = index === 0 ? 'none' : t; 
            opt.text = t; 
            if (index === 0) opt.selected = true;
            sel.appendChild(opt); 
        });
    });

    // 기본 성향 드롭다운 초기화
    mainSel.innerHTML = '';
    ALIGNMENTS.forEach(t => {
        const opt = document.createElement('option');
        opt.value = t;
        opt.text = t;
        if (t === '완전 중립') opt.selected = true; // 기본값
        mainSel.appendChild(opt);
    });
}

function renderCharacterList() {
    const container = document.getElementById('character-list');
    const emptyState = document.getElementById('empty-state');
    container.innerHTML = '';
    if (characters.length === 0) { container.classList.add('hidden'); emptyState.classList.remove('hidden'); return; }
    container.classList.remove('hidden'); emptyState.classList.add('hidden');

    characters.forEach(char => {
        const div = document.createElement('div');
        div.className = "bg-white dark:bg-slate-700 p-4 rounded-xl border border-slate-200 dark:border-slate-600 shadow-sm relative group hover:shadow-md transition-shadow cursor-pointer";
        const badge = char.isMinor 
            ? `<span class="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full ml-1" title="미성년자">🌱</span>` 
            : ``;

        // ⭐ 이미지가 있으면 이미지 태그, 없으면 아이콘
        const imgHtml = char.profileImage 
            ? `<img src="${char.profileImage}" class="w-12 h-12 rounded-full object-cover border border-slate-200 shadow-inner">`
            : `<div class="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center text-lg text-slate-400 flex-none shadow-inner"><i class="fa-regular fa-user"></i></div>`;

        if (affectionMode) {
            div.onclick = () => showAffectionModal(char.id);
            div.innerHTML = `
                <div class="flex justify-between items-start mb-2">
                    <h3 class="font-bold text-lg dark:text-white">${char.name}${badge}</h3>
                    <span class="text-xs bg-brand-100 dark:bg-brand-900 text-brand-600 dark:text-brand-300 px-2 py-1 rounded-full">${char.mbti}</span>
                </div>
                <div class="text-sm text-slate-500 dark:text-slate-400 mb-2"><i class="fa-solid fa-door-closed mr-1"></i> ${char.room}호</div>
                <div class="flex items-center gap-2 text-sm">
                    <span class="text-xs bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-2 py-0.5 rounded-full font-medium" title="소속">${char.affiliation}</span>
                </div>
                <div class="text-center mt-2 p-2 bg-brand-50 dark:bg-slate-800 rounded-lg text-brand-600 dark:text-brand-400 text-sm font-medium">클릭하여 관계 보기</div>
            `;
        } else {
            div.onclick = () => showCharacterDetailModal(char.id); 
            div.innerHTML = `
                <button onclick="event.stopPropagation(); removeCharacter('${char.id}')" class="absolute top-2 right-2 text-slate-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 p-1 z-10"><i class="fa-solid fa-times"></i></button>
                <div class="flex items-center gap-3">
                    ${imgHtml} <div class="flex-1 min-w-0">
                        <h3 class="font-bold text-lg text-slate-900 dark:text-white truncate" title="${char.name}">${char.name}${badge}</h3>
                        <div class="text-xs text-slate-500 dark:text-slate-400 flex gap-2">
                           <span title="호실"><i class="fa-solid fa-door-closed mr-1"></i>${char.room}호</span>
                           <span class="font-medium truncate" title="소속">${char.affiliation}</span>
                        </div>
                    </div>
                </div>
            `;
        }
        container.appendChild(div);
    });
    document.getElementById('total-count').textContent = characters.length;
}

function renderLocations() {
    const aptGrid = document.getElementById('apartment-grid');
    aptGrid.innerHTML = '';
    const renderedIds = new Set();
    
    const getGroupMembers = (char) => {
        if (!char.interactionGroup) return [char];
        return characters.filter(c => c.interactionGroup === char.interactionGroup && c.currentLocation === char.currentLocation);
    };

    for (let f=5; f>=1; f--) { 
        for (let r=1; r<=6; r++) {
            const roomNum = `${f}0${r}`;
            const occupants = characters.filter(c => c.room === roomNum && c.currentLocation === 'apt');
            const cell = document.createElement('div');
            cell.className = "bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg p-2 min-h-[80px] flex flex-col relative";
            cell.innerHTML = `<div class="text-xs font-mono text-slate-400 mb-1 absolute top-1 right-2">${roomNum}</div>`;
            const occDiv = document.createElement('div');
            occDiv.className = "flex flex-wrap gap-1 mt-4";
            
            occupants.forEach(occ => {
                if (renderedIds.has(occ.id)) return;
                const groupMembers = getGroupMembers(occ);
                const allInApt = groupMembers.every(m => m.currentLocation === 'apt');
                
                if (groupMembers.length > 1 && allInApt) {
                     const groupSpan = document.createElement('span');
                     groupSpan.className = "inline-flex items-center gap-0.5 bg-white dark:bg-slate-600 border border-brand-200 dark:border-slate-500 rounded px-1 shadow-sm max-w-full flex-wrap";
                     let html = ``;
                     groupMembers.forEach((m, idx) => {
                         html += `<span class="text-[10px] text-brand-700 dark:text-brand-300 font-bold whitespace-nowrap">${m.name}</span>`;
                         if (idx < groupMembers.length - 1) html += `<i class="fa-solid fa-link text-[8px] text-slate-400 mx-0.5"></i>`;
                         renderedIds.add(m.id);
                     });
                     groupSpan.innerHTML = html;
                     occDiv.appendChild(groupSpan);
                } else {
                     const badge = document.createElement('span');
                     badge.className = "text-[10px] bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-full";
                     badge.textContent = occ.name;
                     occDiv.appendChild(badge);
                     renderedIds.add(occ.id);
                }
            });
            cell.appendChild(occDiv);
            aptGrid.appendChild(cell);
        }
    }

    const extList = document.getElementById('external-places-list');
    extList.innerHTML = '';
    const placesToRender = PLACES.filter(p => p.type === 'out' || p.type === 'travel');

    placesToRender.forEach(place => {
        const occupants = characters.filter(c => c.currentLocation === place.id);
        const row = document.createElement('div');
        row.className = `p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-slate-100 dark:border-slate-600 flex items-start gap-3 ${place.id === 'travel' ? 'border-l-4 border-l-purple-400' : ''}`;
        
        let icon = 'fa-building';
        if (place.id === 'mart') icon = 'fa-cart-shopping';
        if (place.id === 'cafe') icon = 'fa-mug-hot';
        if (place.id === 'school') icon = 'fa-graduation-cap';
        if (place.id === 'restaurant') icon = 'fa-utensils';
        if (place.id === 'travel') icon = 'fa-plane-departure text-purple-500';
        
        let html = `
            <div class="w-10 h-10 rounded-full bg-white dark:bg-slate-600 flex items-center justify-center text-slate-400 shadow-sm flex-none">
                <i class="fa-solid ${icon}"></i>
            </div>
            <div class="flex-1">
                <div class="font-medium text-sm mb-1">${place.name}</div>
                <div class="flex flex-wrap gap-1">
        `;
        
        if (occupants.length === 0) {
            html += `<span class="text-xs text-slate-400">-</span>`;
        } else {
            const extRenderedIds = new Set();
            occupants.forEach(occ => {
                 if (extRenderedIds.has(occ.id)) return;
                 const groupMembers = getGroupMembers(occ);

                 if (groupMembers.length > 1) {
                     html += `<span class="inline-flex items-center gap-0.5 bg-white dark:bg-slate-600 border border-yellow-300 dark:border-yellow-700 rounded px-1 shadow-sm flex-wrap">`;
                     groupMembers.forEach((m, idx) => {
                         html += `<span class="text-[10px] text-yellow-800 dark:text-yellow-200 font-bold whitespace-nowrap">${m.name}</span>`;
                         if (idx < groupMembers.length - 1) html += `<i class="fa-solid fa-link text-[8px] text-slate-400 mx-0.5"></i>`;
                         extRenderedIds.add(m.id);
                     });
                     html += `</span>`;
                 } else {
                     html += `<span class="text-xs bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 px-2 py-0.5 rounded-full">${occ.name}</span>`;
                     extRenderedIds.add(occ.id);
                 }
            });
        }
        html += `</div></div>`;
        row.innerHTML = html;
        extList.appendChild(row);
    });
}

function renderStatusTable() {
    const tbody = document.getElementById('status-table-body');
    tbody.innerHTML = '';
    characters.forEach(char => {
        const locName = getLocationName(char.currentLocation);
        const tr = document.createElement('tr');
        tr.innerHTML = `<td class="px-4 py-3 font-medium text-slate-900 dark:text-white">${char.name}</td><td class="px-4 py-3 text-slate-500 dark:text-slate-400">${locName}</td><td class="px-4 py-3 text-slate-500 dark:text-slate-400">${char.currentAction || '-'}</td>`;
        tbody.appendChild(tr);
    });
    document.getElementById('day-badge').textContent = `${day}일차`;
}

function renderLogs(newLogs) {
    const container = document.getElementById('log-container');
    if (container.querySelector('.italic')) container.innerHTML = '';
    const dayDiv = document.createElement('div');
    dayDiv.className = "mb-6 animate-[fadeIn_0.5s_ease-out]";
    dayDiv.innerHTML = `<div class="flex items-center gap-2 mb-3"><div class="h-px bg-slate-300 dark:bg-slate-600 flex-1"></div><span class="text-xs font-bold text-slate-400 uppercase tracking-wider">${day}일차</span><div class="h-px bg-slate-300 dark:bg-slate-600 flex-1"></div></div>`;
    newLogs.forEach(log => {
        const p = document.createElement('div');
        let styleClass = "text-slate-600 dark:text-slate-300 border-l-2 border-slate-300 pl-3 py-1";
        if (log.type === 'event') styleClass = "text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-brand-900/30 border-l-4 border-brand-500 pl-3 py-2 rounded-r-lg font-medium";
        if (log.type === 'social') styleClass = "text-slate-700 dark:text-slate-200 border-l-2 border-yellow-400 pl-3 py-1 bg-yellow-50/50 dark:bg-transparent";
        p.className = `mb-2 text-sm ${styleClass}`;
        p.textContent = log.text;
        dayDiv.appendChild(p);
    });
    container.insertBefore(dayDiv, container.firstChild);
}
function clearLogs() { document.getElementById('log-container').innerHTML = `<div class="text-center text-slate-400 italic py-10">로그가 초기화되었습니다.</div>`; logs = []; }

function toggleExportMenu(event) { event.stopPropagation(); document.getElementById('export-menu').classList.toggle('hidden'); }
function closeMenus(event) { const menu = document.getElementById('export-menu'); if (!menu.classList.contains('hidden')) menu.classList.add('hidden'); }
function toggleAffectionMode() {
    affectionMode = !affectionMode;
    const btn = document.getElementById('btn-affection-mode');
    if (affectionMode) btn.className = "bg-brand-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors shadow-inner";
    else btn.className = "border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400 px-3 py-2 rounded-lg text-sm font-medium hover:bg-brand-50 dark:hover:bg-slate-800 transition-colors";
    renderCharacterList();
}
function showAffectionModal(charId) {
    const char = characters.find(c => c.id === charId);
    const content = document.getElementById('modal-content');
    document.getElementById('modal-char-name').textContent = char.name;
    content.innerHTML = '';
    const list = document.createElement('div');
    list.className = "divide-y divide-slate-100 dark:divide-slate-700";
    const rels = Object.entries(char.relationships).map(([id, score]) => ({ id, score, name: characters.find(c=>c.id===id)?.name, specialStatus: char.specialRelations?.[id] })).filter(x => x.name).sort((a,b) => b.score - a.score);
    if (rels.length === 0) content.innerHTML = '<div class="p-8 text-center text-slate-400">아직 관계가 형성되지 않았습니다.</div>';
    else {
        rels.forEach(rel => {
            const row = document.createElement('div');
            row.className = "p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors";
            row.innerHTML = `<div class="flex items-center gap-3"><span class="font-medium dark:text-slate-200">${rel.name}</span><span class="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-600 text-slate-600 dark:text-slate-300">${getRelationshipLabel(rel.score, rel.specialStatus)}</span></div><div class="flex flex-col items-end"><div class="text-sm gap-1 flex">${getHeartHTML(rel.score, rel.specialStatus)}</div><span class="text-xs text-slate-400 font-mono mt-1">${rel.score}</span></div>`;
            list.appendChild(row);
        });
        content.appendChild(list);
    }
    document.getElementById('affection-modal').classList.remove('hidden');
}
function closeModal() { document.getElementById('affection-modal').classList.add('hidden'); }

function exportData(includeRelationships) {
    if (characters.length === 0) return alert("저장할 데이터가 없습니다.");
    const exportData = characters.map(c => {
        const base = { 
            name: c.name, mbti: c.mbti, room: c.room, isMinor: c.isMinor, 
            // ⭐ 새로 추가된 속성
            affiliation: c.affiliation, ability: c.ability, 
            preferredAffiliation: c.preferredAffiliation || 'none', 
            dislikedAffiliation: c.dislikedAffiliation || 'none'
            // ⭐
        };
        if (includeRelationships) {
            base.id = c.id; base.relationships = c.relationships; base.specialRelations = c.specialRelations; base.currentLocation = c.currentLocation; base.currentAction = c.currentAction;
        }
        return base;
    });
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({ version: 1.6, type: includeRelationships ? 'full' : 'basic', day: includeRelationships ? day : 1, data: exportData }));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `housing_simul_${includeRelationships ? 'full' : 'basic'}_${Date.now()}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function importData(input) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const json = JSON.parse(e.target.result);
            if (!json.data || !Array.isArray(json.data)) throw new Error("잘못된 파일 형식");
            if (confirm("현재 명단이 덮어씌워집니다. 진행하시겠습니까?")) {
                day = json.day || 1;
                characters = json.data.map(d => ({
                    id: d.id || Date.now().toString() + Math.random().toString(36).substring(2, 7),
                    name: d.name, 
                    mbti: d.mbti, 
                    room: d.room,
                    isMinor: d.isMinor || false,
                    // ⭐ 새로 추가된 속성들 불러오기
                    affiliation: d.affiliation || AFFILIATIONS[0], 
                    ability: d.ability || ABILITY_RANKS[2], // B 랭크
                    preferredAffiliation: d.preferredAffiliation === 'none' ? null : d.preferredAffiliation,
                    dislikedAffiliation: d.dislikedAffiliation === 'none' ? null : d.dislikedAffiliation,
                    // ⭐
                    currentLocation: d.currentLocation || 'apt', 
                    currentAction: d.currentAction || '-',
                    relationships: d.relationships || {}, 
                    specialRelations: d.specialRelations || {}
                }));
                renderCharacterList(); renderLocations(); renderStatusTable(); clearLogs();
                document.getElementById('total-count').textContent = characters.length;
                alert("성공적으로 불러왔습니다.");
            }
        } catch (err) { alert("파일 불러오기 실패: " + err.message); }
    };
    reader.readAsText(file); input.value = '';
}

function resetAll() {
    if(confirm("모든 데이터를 초기화하시겠습니까?")) {
        characters = []; day = 1; logs = [];
        renderCharacterList(); renderLocations(); renderStatusTable(); clearLogs();
        document.getElementById('total-count').textContent = 0;
    }
}

function switchTab(tabId) {
    document.getElementById('roster-view').classList.add('hidden');
    document.getElementById('location-view').classList.add('hidden');
    document.getElementById('execution-view').classList.add('hidden');
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('bg-white', 'dark:bg-slate-600', 'shadow-sm', 'text-brand-600', 'dark:text-brand-300');
        btn.classList.add('text-slate-600', 'dark:text-slate-300');
    });
    document.getElementById(`${tabId}-view`).classList.remove('hidden');
    const btn = document.getElementById(`btn-${tabId}`);
    btn.classList.remove('text-slate-600', 'dark:text-slate-300', 'hover:bg-slate-200');
    btn.classList.add('bg-white', 'dark:bg-slate-600', 'shadow-sm', 'text-brand-600', 'dark:text-brand-300');
    if (tabId === 'execution') renderStatusTable();
    if (tabId === 'location') renderLocations();
}

function updateUI() { renderCharacterList(); renderStatusTable(); }

function toggleTheme() {
    isDarkMode = !isDarkMode;
    if (isDarkMode) { document.documentElement.classList.add('dark'); localStorage.setItem('theme', 'dark'); }
    else { document.documentElement.classList.remove('dark'); localStorage.setItem('theme', 'light'); }
}

function openRelationshipMap() {
    const modal = document.getElementById('relationship-map-modal');
    modal.classList.remove('hidden');
    drawRelationshipMap();
    
    window.addEventListener('resize', drawRelationshipMap);
}

function closeRelationshipMap() {
    const modal = document.getElementById('relationship-map-modal');
    modal.classList.add('hidden');
    window.removeEventListener('resize', drawRelationshipMap);
}

function drawRelationshipMap() {
    const canvas = document.getElementById('relationship-canvas');
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = isDarkMode ? "#0f172a" : "#f8fafc";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    
    ctx.fillStyle = isDarkMode ? "#0f172a" : "#f8fafc";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
      
    if (characters.length === 0) {
        ctx.font = "14px Noto Sans KR";
        ctx.fillStyle = isDarkMode ? "#94a3b8" : "#64748b";
        ctx.textAlign = "center";
        ctx.fillText("표시할 캐릭터가 없습니다.", canvas.width/2, canvas.height/2);
        return;
    }

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) * 0.8;
    
    const angleStep = (2 * Math.PI) / characters.length;
    const nodes = characters.map((char, index) => {
        const angle = angleStep * index - Math.PI / 2;
        return {
            x: centerX + Math.cos(angle) * radius,
            y: centerY + Math.sin(angle) * radius,
            char: char,
            angle: angle
        };
    });

    ctx.lineWidth = 1;
    
    nodes.forEach(source => {
        nodes.forEach(target => {
            if (source === target) return;
            
            const relScore = source.char.relationships[target.char.id] || 0;
            const special = source.char.specialRelations?.[target.char.id];
            
            if (relScore === 0 && !special) return;

            let color = isDarkMode ? "#475569" : "#cbd5e1";
            if (special === 'lover') color = "#db2777";
            else if (relScore >= 60) color = "#2563eb";
            else if (relScore >= 20) color = "#16a34a";
            else if (relScore <= -60) color = "#dc2626";
            else if (relScore <= -20) color = "#ea580c";
            
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = special === 'lover' ? 2 : 1;
            
            const midX = (source.x + target.x) / 2;
            const midY = (source.y + target.y) / 2;
            
            const dx = midX - centerX;
            const dy = midY - centerY;
            
            ctx.moveTo(source.x, source.y);
            ctx.quadraticCurveTo(centerX, centerY, target.x, target.y);
            ctx.stroke();
        });
    });

    nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 20, 0, 2 * Math.PI);
        ctx.fillStyle = isDarkMode ? "#1e293b" : "#ffffff";
        ctx.fill();
        ctx.strokeStyle = isDarkMode ? "#475569" : "#cbd5e1";
        ctx.lineWidth = 2;
        ctx.stroke();
        
        ctx.font = "bold 12px Noto Sans KR";
        ctx.fillStyle = isDarkMode ? "#e2e8f0" : "#1e293b";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(node.char.name, node.x, node.y);
    });
}
function downloadMapImage() {
    const canvas = document.getElementById('relationship-canvas');
    
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tempCtx = tempCanvas.getContext('2d');
    
    tempCtx.fillStyle = isDarkMode ? "#0f172a" : "#f8fafc";
    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    
    tempCtx.drawImage(canvas, 0, 0);
    
    const link = document.createElement('a');
    link.download = `relationship_map_${Date.now()}.png`;
    link.href = tempCanvas.toDataURL("image/png");
    link.click();
}

// ==========================================================
// ⭐ 상세 프로필 (사원증) 모달 관련 함수
// ==========================================================

function switchDetailTab(clickedElement, tabId) {
    document.querySelectorAll('.detail-tab-btn').forEach(btn => {
        btn.setAttribute('data-active', 'false');
    });
    document.querySelectorAll('.detail-tab-content').forEach(content => {
        content.classList.add('hidden');
    });

    clickedElement.setAttribute('data-active', 'true');
    document.getElementById(tabId).classList.remove('hidden');
}

function switchDetailTabByName(tabId) {
    const btn = document.querySelector(`.detail-tab-btn[data-tab='${tabId}']`);
    if(btn) {
        switchDetailTab(btn, tabId);
    }
}

function closeCharacterDetailModal() {
    document.getElementById('character-detail-modal').classList.add('hidden');
}

// ⭐ 상세 모달에서 전체 호감도 모달을 띄우기 위한 래퍼 함수
function openAffectionModalFromDetail() {
    const charId = document.getElementById('character-detail-modal').dataset.currentId;
    
    // 1. 상세 모달 닫기
    closeCharacterDetailModal();

    // 2. 호감도 모드가 아니면 전환 후 띄우기
    if (!affectionMode) {
        toggleAffectionMode(); // 호감도 모드로 전환
    }
    // 3. 전체 호감도 모달 팝업
    showAffectionModal(charId);
}

// ⭐ 관계 TOP 3 렌더링 함수
function renderTopRelationships(char) {
    const listContainer = document.getElementById('top-relations-list');
    listContainer.innerHTML = ''; // Clear previous content

    // 1. 관계 점수 계산 및 정렬 (자신 제외)
    const relationScores = characters
        .filter(c => c.id !== char.id)
        .map(target => ({
            target: target,
            score: char.relationships[target.id] || 0,
            specialStatus: char.specialRelations?.[target.id] // 특별 관계도 가져옴
        }))
        .sort((a, b) => b.score - a.score) // 내림차순 정렬
        .slice(0, 3); // 상위 3개만 선택

    // 2. 리스트 렌더링
    if (relationScores.length === 0) {
        listContainer.innerHTML = '<p class="text-slate-500 dark:text-slate-400 text-sm py-4 text-center">아직 상호작용 가능한 인물이 없습니다.</p>';
        return;
    }

    relationScores.forEach(item => {
        // 기존의 getRelationshipLabel 함수를 재활용합니다.
        const statusLabel = getRelationshipLabel(item.score, item.specialStatus); 
        const div = document.createElement('div');
        div.className = 'flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg shadow-sm';
        
        // 점수에 따른 텍스트 색상 결정
        let scoreColorClass = 'text-slate-800 dark:text-slate-100';
        if (item.score >= 80) scoreColorClass = 'text-blue-600 dark:text-blue-400 font-extrabold';
        else if (item.score >= 50) scoreColorClass = 'text-green-600 dark:text-green-400 font-bold';
        else if (item.score <= -50) scoreColorClass = 'text-red-600 dark:text-red-400 font-bold';

        div.innerHTML = `
            <span class="font-medium text-slate-800 dark:text-white">${item.target.name}</span>
            <div class="flex items-center gap-2">
                <span class="text-xs text-slate-500 dark:text-slate-400">${statusLabel}</span>
                <span class="font-bold ${scoreColorClass}">${item.score}</span>
            </div>
        `;
        listContainer.appendChild(div);
    });
}

// ⭐ 인물별 로그 렌더링 함수
function renderCharacterLogs(char) {
    const logContainer = document.getElementById('character-logs-list');
    logContainer.innerHTML = ''; // Clear previous content
    
    // 로그 필터링: 해당 캐릭터의 이름이 포함된 로그만 추출
    const filteredLogs = logs.filter(log => log.text.includes(char.name)).slice(0, 50); // 최근 50개 제한

    if (filteredLogs.length === 0) {
        logContainer.innerHTML = '<p class="text-slate-500 dark:text-slate-400 text-sm py-4 text-center">아직 이 인물과 관련된 로그가 없습니다.</p>';
        return;
    }
    
    filteredLogs.forEach(log => {
        const div = document.createElement('div');
        let typeClass = 'text-slate-600 dark:text-slate-300';
        let icon = 'fa-solid fa-comment';
        
        // logs 배열은 날짜 정보(day)를 가지고 있지 않으므로 임시로 순서 정보를 사용합니다.
        // 로그가 최신순(logs 배열의 앞부분)으로 저장되므로, 인덱스를 이용해 "N번째 로그"로 표시합니다.
        const logDay = logs.length - logs.indexOf(log); 
        
        if (log.type === 'event') {
            typeClass = 'text-red-600 dark:text-red-400 font-medium';
            icon = 'fa-solid fa-exclamation-circle';
        } else if (log.type === 'social') {
            typeClass = 'text-blue-600 dark:text-blue-400 font-medium';
            icon = 'fa-solid fa-users';
        } else if (log.type === 'solo') {
            typeClass = 'text-green-600 dark:text-green-400';
            icon = 'fa-solid fa-person';
        }

        
        div.className = 'text-sm border-l-4 border-slate-200 dark:border-slate-700 pl-3 py-1';
        div.innerHTML = `
            <div class="text-xs text-slate-400 dark:text-slate-500 mb-1 font-mono">${logDay}번째 로그</div>
            <div class="${typeClass}">
                <i class="${icon} w-4 text-center mr-1"></i> ${log.text}
            </div>
        `;
        logContainer.appendChild(div);
    });
}


// ⭐ 메인 사원증 모달 표시 함수 (데이터 설정 및 탭 초기화)
function showCharacterDetailModal(charId) {
    const char = characters.find(c => c.id === charId);
    if (!char) return;

    document.getElementById('character-detail-modal').dataset.currentId = charId;
    
    // 1. 데이터 바인딩
    document.getElementById('detail-char-name').textContent = char.name.toUpperCase();
    document.getElementById('detail-char-mbti').textContent = `MBTI/${char.mbti}`;
    document.getElementById('detail-char-room').textContent = `${char.room}호`;
    document.getElementById('detail-char-affiliation').textContent = char.affiliation;
    document.getElementById('detail-char-ability').textContent = char.ability;
    document.getElementById('detail-char-alignment').textContent = char.alignment;

    // ⭐ 2. 모달에 사진 표시
    const imgContainer = document.getElementById('detail-char-img-container');
    if (imgContainer) { // id가 추가되었는지 확인
        if (char.profileImage) {
            imgContainer.innerHTML = `<img src="${char.profileImage}" class="w-full h-full object-cover">`;
        } else {
            imgContainer.innerHTML = `<i class="fa-regular fa-user"></i>`;
        }
    }

    // 3. 관계 및 로그 탭 데이터 렌더링
    renderTopRelationships(char);
    renderCharacterLogs(char);

    // 4. 모달 표시
    document.getElementById('character-detail-modal').classList.remove('hidden');
    switchDetailTabByName('id-card');
}
// ==========================================================
// ⭐ [추가] 사원증 사진 클릭 시 이미지 변경 로직
// ==========================================================

// 1. 사진 영역 클릭 시 숨겨진 파일 입력창을 대신 클릭해주는 함수
function triggerModalImageUpload() {
    document.getElementById('modal-profile-input').click();
}

// 2. 파일이 선택되면 데이터를 읽어서 캐릭터 정보에 저장하고 화면을 갱신하는 함수
function updateCharacterProfileImage(input) {
    const file = input.files[0];
    if (!file) return;

    // 현재 모달에 띄워진 캐릭터 ID 가져오기
    const charId = document.getElementById('character-detail-modal').dataset.currentId;
    const char = characters.find(c => c.id === charId);
    if (!char) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        // 1. 데이터 저장
        char.profileImage = e.target.result;

        // 2. 모달(사원증) 이미지 즉시 변경
        const imgContainer = document.getElementById('detail-char-img-container');
        // hover 효과를 유지하기 위해 내부 HTML 구조를 다시 잡음
        imgContainer.innerHTML = `
            <img src="${char.profileImage}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <i class="fa-solid fa-camera text-white text-xl"></i>
            </div>
        `;

        // 3. 명단 리스트(카드)의 작은 이미지도 즉시 갱신
        renderCharacterList(); 
    };
    reader.readAsDataURL(file);

    // 입력창 초기화 (같은 파일을 다시 선택할 때도 이벤트가 발생하도록)
    input.value = '';
}