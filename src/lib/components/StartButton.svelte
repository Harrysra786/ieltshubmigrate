<script>
    async function sendData() {
        const response = await fetch('./../../routes/api/sendData.ts');
        const data = await response.json();

        if (data.success) {
            alert('Data sent successfully!');
        } else {
            alert('Failed to send data.');
        }
    }
</script>

<button on:click={sendData}>Send Data</button>
