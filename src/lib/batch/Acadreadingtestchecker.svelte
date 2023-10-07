<script>
    import TestChecker from './testchecktool.svelte';
</script>

<TestChecker 
    scoringSchemaFile="/static/readingscore.json" 
    jsonFile="/reading.json" 
    collectionName="readingtest" 
    title="Reading Mock Test Week #1" 
/>
