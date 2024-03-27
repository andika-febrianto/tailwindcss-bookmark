const Question_2 = () => {
  const quest = `array1 = [2,3,1,3,2,4,6,7,9,2,29]
        array2 = [2,1,4,3,9,6]
        array1 di order ascending
        array2 = adalah bagian dari array1
        outputnya yg tidak sama dengan bilangan pada array2 yang tidak sama
        dengan array1 di tambah pada array2
        result [2,1,4,3,9,6,7,29]`

  const text = `const relativeSortArray = (arr1: number[], arr2: number[]) => {
    let i: number = 0
    let j: number = 0
    const arr3: number[] = []
    let tidaksama: boolean[] = []

    arr1.sort((a, b) => {
      return a - b
    })

    for (i = 0; i < arr1.length; i++) {
      tidaksama = []
      for (j = 0; j < arr2.length; j++) {
        if (arr1[i] !== arr2[j]) {
          tidaksama.push(false)
        } else {
          tidaksama.push(true)
        }
      }
      if (tidaksama.includes(true)) {
        continue
      } else {
        arr3.push(arr1[i])
      }
    }
    console.log(relativeSortArray)

    return 'result [' + arr2.concat(arr3) + ']'
  } 
}`

  const relativeSortArray = (arr1: number[], arr2: number[]) => {
    let i: number = 0
    let j: number = 0
    const arr3: number[] = []
    let tidaksama: boolean[] = []

    arr1.sort((a, b) => {
      return a - b
    })

    for (i = 0; i < arr1.length; i++) {
      tidaksama = []
      for (j = 0; j < arr2.length; j++) {
        if (arr1[i] !== arr2[j]) {
          tidaksama.push(false)
        } else {
          tidaksama.push(true)
        }
      }
      if (tidaksama.includes(true)) {
        continue
      } else {
        arr3.push(arr1[i])
      }
    }
    console.log(relativeSortArray)

    return 'result [' + arr2.concat(arr3) + ']'
  }

  // relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 29], [2, 1, 4, 3, 9, 6])
  return (
    <>
      <p>
        <b>2.</b> {quest}
      </p>

      <p>
        <b>Source Code:</b>
      </p>
      <p>{text}</p>

      {relativeSortArray(
        [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 29],
        [2, 1, 4, 3, 9, 6]
      )}
    </>
  )
}

export default Question_2
