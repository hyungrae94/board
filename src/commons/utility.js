const AVATAR_COLOR = ['#795548', '#cddc39', '#8bc34a', '#3f51b5', '#ff9800'];

/**
 * Date를 받아와 현재 기준 생성일을 변환해서 알려주는 함수
 * @param {Date} writtenAt
 * @returns {string} createAt
 */
export const replaceDate = writtenAt => {
    const today = new Date();
    const writtenDay = new Date(writtenAt);
    const milliSeconds = Number(today) - Number(writtenDay);

    const seconds = milliSeconds / 1000;
    if (seconds < 60) return `방금 전`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;

    return `${String(writtenDay.getFullYear()).slice(2)}-${String(writtenDay.getMonth() + 1).padStart(2, '0')}-${String(
        writtenDay.getDate()
    ).padStart(2, '0')}`;
};

/**
 * 랜덤한 색상 코드를 반환해주는 함수
 *
 * @returns {string} colorCode
 */
export const randomColor = () => {
    const num = Math.floor(Math.random() * 5 + 1);
    return AVATAR_COLOR[num - 1];
};

/**
 * 회원 이름 앞 2글자만 보여주는 함수
 *
 * @param {string} name
 * @returns {string} changeName
 */
export const replaceName = name => {
    if (name === '') return name;
    return name[0].toUpperCase() + name[1].toUpperCase();
};

/**
 * 게시글 내용을 줄여서 보여주는 함수
 *
 * @param {string} content
 * @returns {string} changeContetn
 */
export const replaceContent = content => {
    if (content.length > 50) return content.slice(0, 50) + ' .....';
    return content;
};
