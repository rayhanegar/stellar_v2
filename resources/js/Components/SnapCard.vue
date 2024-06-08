<script setup>

    import { computed } from 'vue';

    defineProps(['snap']);
    const formattedDate = (snap) => {
        const date = new Date(snap.created_at);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const dateParts = new Intl.DateTimeFormat('en-US', options).formatToParts(date);
        const formattedDate = `${dateParts.find(part => part.type === 'month').value} ${dateParts.find(part => part.type === 'day').value} ${dateParts.find(part => part.type === 'year').value}`;
        return formattedDate;
    };

    const shortContent = (snap) => {
        return snap.content.length > 50 ? snap.content.slice(0, 20) + '...' : snap.content;
    };

</script>

<template>
    <div class="flex flex-col py-4 px-2 rounded-lg bg-grey">
        <div class="w-full flex flex-col items-end px-3">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1516 22.1853C16.0003 23.5787 15.5971 24.6913 14.895 25.6778C13.9534 26.9938 12.3746 28.2234 9.76418 29.5304C9.59671 29.6041 9.44595 29.7109 9.32105 29.8446C9.19615 29.9783 9.09971 30.1359 9.03759 30.308C8.97547 30.48 8.94896 30.6629 8.95967 30.8455C8.97038 31.0281 9.01809 31.2067 9.0999 31.3703C9.18171 31.5339 9.29591 31.6792 9.43558 31.7974C9.57525 31.9155 9.73747 32.004 9.91239 32.0576C10.0873 32.1111 10.2713 32.1285 10.4532 32.1088C10.635 32.0891 10.811 32.0326 10.9704 31.9428C13.7608 30.5494 15.7825 29.0786 17.0913 27.2441C18.4253 25.379 18.9186 23.2781 18.9186 20.8351V12.7338C18.9186 11.8983 18.5867 11.0969 17.9958 10.5061C17.405 9.91527 16.6037 9.58334 15.7681 9.58334H8.56699C7.73143 9.58334 6.93009 9.91527 6.33926 10.5061C5.74843 11.0969 5.4165 11.8983 5.4165 12.7338V19.0348C5.4165 20.7739 6.82792 22.1853 8.56699 22.1853H16.1516ZM34.1544 22.1853C34.0031 23.5787 33.5999 24.6913 32.8978 25.6778C31.9562 26.9938 30.3774 28.2234 27.767 29.5304C27.5995 29.6041 27.4487 29.7109 27.3238 29.8446C27.1989 29.9783 27.1025 30.1359 27.0404 30.308C26.9783 30.48 26.9517 30.6629 26.9625 30.8455C26.9732 31.0281 27.0209 31.2067 27.1027 31.3703C27.1845 31.5339 27.2987 31.6792 27.4384 31.7974C27.578 31.9155 27.7403 32.004 27.9152 32.0576C28.0901 32.1111 28.2741 32.1285 28.456 32.1088C28.6378 32.0891 28.8138 32.0326 28.9732 31.9428C31.7636 30.5494 33.7853 29.0786 35.0941 27.2441C36.4281 25.379 36.9214 23.2781 36.9214 20.8351V12.7338C36.9214 11.8983 36.5895 11.0969 35.9986 10.5061C35.4078 9.91527 34.6065 9.58334 33.7709 9.58334H26.5698C25.7342 9.58334 24.9329 9.91527 24.3421 10.5061C23.7512 11.0969 23.4193 11.8983 23.4193 12.7338V19.0348C23.4193 20.7739 24.8307 22.1853 26.5698 22.1853H34.1544Z" fill="white"/>
            </svg>
        </div>
        <div class="w-full h-full flex flex-col items-start justify-end px-3 py-3 space-y-3 ">
            <p class="font-light">{{ formattedDate(snap) }}</p>
            <h3 class="font-bold">{{ snap.url }}</h3>
            <p class="break-words">{{ shortContent(snap) }}</p>
        </div>
    </div>
</template>