import { program } from 'commander';

const join = (first, second, connector = '') => `${first}${connector}${second}`;

program
  .name('string-util')
  .description('Инструмент для работы со строками')
  .version('0.0.1');

program
  .command('join')
  .description('Команда соединяет две строки в одну')
  .argument('<first>', 'первая строка')
  .argument('<second>', 'вторая строка')
  .option('-c, --connector <type>', 'соединительная строка', ' ')
  .action((first, second, options) => {
    // BEGIN (write your solution here)
    const connector = options.connector; // Получаем значение соединителя
    const result = join(first, second, connector); // Вызываем функцию join
    console.log(result); // Выводим результат в консоль
    // END
  });

program.parse();
