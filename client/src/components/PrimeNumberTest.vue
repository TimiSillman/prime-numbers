<template>
    <div>
        <n-grid x-gap="12" :cols="2">
            <n-gi class="content-parent">
                <div class="content-container">
                    <h1>Sum list of given numbers and check if the result is a prime number</h1>
                    <n-input-number v-model:value="number" type="text" placeholder="Enter number" />
                    <n-button @click="clearList">CLEAR</n-button>
                    <n-button @click="addToList">ADD TO LIST</n-button>
                    <n-button @click="querySumAndChek(sumAndCheckNumbers)">CHECK</n-button>
                    <div v-if="errorSumAndCheck">
                        <div v-for="(message, index) in errorMessage" :key="index"> {{ message }}</div>
                    </div>
                    <p>Sum of the numbers is {{ sumAndCheckResult?.result }} and is it a prime number? {{
                            sumAndCheckResult?.isPrime ? 'yes' : 'no'
                    }}</p>

                    <div>Numbers given:</div>
                    <div v-for="(number, i) in sumAndCheckNumbers" :key="i"> {{ number }} <n-button
                            @click="removeFromList(i)">X</n-button>
                    </div>
                </div>
            </n-gi>
            <n-gi class="content-parent">
                <div class="content-container">
                    <h1>Check if given number is a prime number </h1>
                    <n-input-number v-model:value="checkPrimeNumber" type="text" placeholder="Enter number" />
                    <n-button @click="queryPrimeCheck(checkPrimeNumber)">CHECK</n-button>
                    <p v-if="errorPrimeCheck"> {{ errorMessage }}</p>
                    <p>Is {{ checkPrimeResult?.number }} a prime number? {{ checkPrimeResult?.isPrime ? 'yes' : 'no' }}
                    </p>
                </div>
            </n-gi>
        </n-grid>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import axios, { AxiosResponse } from 'axios'
import { NButton, NInputNumber, NGrid, NGi } from 'naive-ui'

@Options({
    components: {
        NButton,
        NInputNumber,
        NGrid,
        NGi
    }
})

export default class PrimeNumberTest extends Vue {

    //sumandcheck endpoint
    errorSumAndCheck = false
    sumAndCheckNumbers: number[] = []
    number = 0
    sumAndCheckResult = { isPrime: false, result: 0 }

    addToList() {
        this.sumAndCheckNumbers.push(this.number)
    }

    removeFromList(i: number) {
        this.sumAndCheckNumbers.splice(i, 1)
    }

    clearList() {
        this.sumAndCheckNumbers = []
    }

    async querySumAndChek(numbers: number[]) {
        try {
            let result = await axios.get('http://localhost:3000/api/prime-number/sumandcheck', { params: { numbers: numbers } })

            if (result.status == 200) {
                this.sumAndCheckResult = result.data
            }
        } catch (error) {
            this.errorSumAndCheck = true
            if (axios.isAxiosError(error)) {
                let axiosResponse = error.response as AxiosResponse
                this.errorMessage = axiosResponse.data.message
            }
        }
    }

    //checkprime endpoint
    checkPrimeNumber = 0
    checkPrimeResult = { isPrime: false, number: 0 }
    errorPrimeCheck = null
    errorMessage = ''

    async queryPrimeCheck(number: number) {
        try {
            let result = await axios.get('http://localhost:3000/api/prime-number/checkprime', { params: { number: number } })
            if (result.status == 200) {
                this.checkPrimeResult = result.data
                this.checkPrimeResult.number = this.checkPrimeNumber
            }
        } catch (error) {
            this.errorSumAndCheck = true
            if (axios.isAxiosError(error)) {
                let axiosResponse = error.response as AxiosResponse
                this.errorMessage = axiosResponse.data.message
            }
        }
    }




}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-container {
    max-width: 500px;
}

.content-parent {
    display: flex;
    justify-content: center;
}
</style>
