const useCreateColorsArray = (stage: number) => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);

  //rgba의 투명도 차이를 인자로 넘겨받는 함수
  const rgabGenerator = (transGap: number) => {
    return `rgba(${r}, ${g}, ${b}, ${0.5 - transGap})`;
  };

  //투명도가 0.5인 main color 생성
  const MAIN_COLOR = rgabGenerator(0);

  //배열의 길이(=빙고판의 칸 개수)
  const ARRAY_LENGTH = Math.pow(Math.round((stage + 0.5) / 2) + 1, 2);

  //빈 배열을 메인컬러로 꽉 채움
  const colorArray = Array.from(Array(ARRAY_LENGTH)).map(
    (x) => `${MAIN_COLOR}`,
  );

  //다른 색상이 배열 중 몇 번째 요소에 들어갈지 선택
  const answerNumber = Math.floor(Math.random() * ARRAY_LENGTH);

  //DIFF_COLOR의 투명도 차이 (+면 진해지고, -면 연해진다. stage가 올라감에 따라 차이가 줄어든다)
  const colorGap = 1 / (stage * 3) + 0.05;

  //메인컬러보다 진하게해줄지(+), 연하게해줄지(-) 랜덤
  const plusOrMinus = Math.round(Math.random()) * 2 - 1;

  const DIFF_COLOR = rgabGenerator(colorGap * plusOrMinus);

  //원래 배열에서 다른 색상으로 요소를 하나 교체한다
  colorArray.splice(answerNumber, 1, DIFF_COLOR);

  return { colorArray, answerNumber };
};

export default useCreateColorsArray;
