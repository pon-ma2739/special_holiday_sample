const errorModal = document.getElementById('errorModal');

const openErrorModal = (message) => {
    const errorText = document.getElementById('errorText');
    errorText.textContent = message; // エラーメッセージをセット
    errorModal.classList.add('is-active'); // モーダルを表示
}

const closeErrorModal = () => {
    errorModal.classList.remove('is-active'); // モーダルを閉じる
}

// エラーモーダルの閉じるボタンにイベントリスナーを追加
document.getElementById('closeErrorModalButton').addEventListener('click', closeErrorModal);

export default openErrorModal; // エラーモーダルを開く関数をエクスポート