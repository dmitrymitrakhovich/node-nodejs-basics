const parseArgs = () => {
  const args = process.argv.slice(2);
  const result = [];

  args.forEach((item, index, arr) => {
    if (index % 2 === 0) {
      result.push(`${item.slice(2)} is ${arr[index + 1]}`);
    }
  });

  console.log(result.join(', '));
};

parseArgs();
