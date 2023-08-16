'use strict'
import {
  Subject, SubjectList, ExamAttribute, Setting, Day, loadPage, ClassTimeList
} from 'https://jaknndiius.github.io/TimeTableAPI/js/timeTableAPI.js';
// 독서
const Reading = new SubjectList('독서', ['윤동희', '신치훈', '김병호']);
Reading.setExam(
  new ExamAttribute(22, 2)
    .addRange('교과서: p114~254')
);
// 인상
const Human = new Subject('인상', '윤동희');
// 영어
const Eng = new SubjectList('영어', ['정화선', '이성훈', '정화선']);
Eng.setExam(
  new ExamAttribute(24,4)
    .addRange('교과서: lesson 4,5, special')
    .addRange('컨셉: UNIT 7~12(p.46~84)')
    .addRange('컨셉: 유형 독해 모의고사 2,3회(p.156~167)')
    .addRange('컨셉: 서술형은 UNIT 7~10(ㅔ46~57, 66~69)')
    .addRange('6월 학평: 18~45번(서술형 제외)')
);
// 수학
const Mathematics = new SubjectList('수학', ['박복음', '박선주', '박선주']);
Mathematics[1].setExam(
  new ExamAttribute(16, 4)
    .addRange('교과서: p86~153')
    .addRange('학습지: 100문제(사인 법칙과 코사인 법칙-수학적 귀납법)')
);
Mathematics[2].setExam(
  new ExamAttribute(16, 4)
    .addRange('교과서: p72~p155')
    .addRange('학습지: 100문제(51번 제외)')
);
//탐구
const Chemistry = new Subject('화학', '이승현');
Chemistry.setExam(
  new ExamAttribute(20, 4)
    .addRange('교과서: p94~210')
    .addRange('완자: 교과서 해당 내용까지')
);
const Biology = new Subject('생명', '정소영');
Biology.setExam(
  new ExamAttribute(20, 4)
    .addRange('교과서: p80~143')
    .addRange('완자: 교과서 해당 내용까지')
);
// 음악
const Music = new Subject('음악', '지세현');
// 체육
const PE = new Subject('체육', '박영덕');
// 국사
const KHistory = new Subject('국사', '김진영');
KHistory.setExam(
  new ExamAttribute(20,3)
    .addRange('교과서: p204~254(p230 냉전 체제가 형성되다 제외)')
    .addRange('학습지: Ⅲ p9~11, Ⅳ p1~4')
);
// 미술
const Art = new Subject('미술', '권유정');
// 외국어
const Foregin = new Subject('일본어', '김희인');
Foregin.setExam(
  new ExamAttribute(20, 5)
    .addRange('교과서: p12~55')
    .addRange('학습지: 수행평가 문장 30개')
);
// 창체
const CA = new Subject('창체', '윤동희');
// 모의고사
Setting.addMoakTest('2023/03/23');
Setting.addMoakTest('2023/06/01');
Setting.addMoakTest('2023/09/06');
Setting.addMoakTest('2023/11/21');
// 수능
Setting.setCSAT('2024/11/14');
// 시간 설정
const classTimes = new ClassTimeList([8, 0], [16, 0], 7);
classTimes.addClassTime(8, 20);
classTimes.addClassTime(9, 20);
classTimes.addClassTime(10, 20);
classTimes.addClassTime(11, 20);
classTimes.addClassTime(12, 20);
classTimes.addClassTime(14, 0);
classTimes.addClassTime(15, 0);
Setting.setClassTime(classTimes);
// 정규 시간표
Setting.group(Eng[1], Mathematics[2], Mathematics[1], CA, Eng[2], Reading[2], Biology)
  .setToRegularSchedule(Day.MONDAY);
Setting.group(Chemistry, Chemistry, PE, Human, Mathematics[1], Mathematics[2], Art)
  .setToRegularSchedule(Day.THEUSDAY);
Setting.group(Reading[1], Eng[1], Mathematics[3], Music, CA, CA, CA)
  .setToRegularSchedule(Day.WEDNESDAY);
Setting.group(Art, Eng[2], Biology, Biology, Eng[3], Foregin, KHistory)
  .setToRegularSchedule(Day.THURSDAY);
Setting.group(Mathematics[2], Reading[2], Mathematics[1], CA, Chemistry, Reading[1], Reading[3])
  .setToRegularSchedule(Day.FIRDAY);
// 시험 시간표
Setting.group(Eng)
  .setToExamSchedule(7, 3);
Setting.group(Mathematics[1], KHistory)
  .setToExamSchedule(7, 4);
Setting.group(Mathmatics[2], Foregin)
  .setToExamSchedule(7, 5);
Setting.group(Reading)
  .setToExamSchedule(7, 6);

loadPage();
