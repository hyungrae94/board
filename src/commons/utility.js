const AVATAR_COLOR = ['#795548', '#cddc39', '#8bc34a', '#3f51b5', '#ff9800'];

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

export const randomColor = () => {
    const num = Math.floor(Math.random() * 5 + 1);
    return AVATAR_COLOR[num + 1];
};

export const replaceName = name => {
    if (name === '') return name;
    return name[0].toUpperCase() + name[1].toUpperCase();
};

export const replaceContent = content => {
    if (content.length > 50) return content.slice(0, 50) + ' .....';
    return content;
};
