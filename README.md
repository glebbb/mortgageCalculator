# mortgageCalculator
ElifTech School task

Чтобы открыть проект, скачайте все папки из calculator, после чего на своём компьютере зайдите в папку index и откройте файл index.html. 

У меня не получилось реализовать кнопочку edit. Кнопки "синхронизировать" и "рассчитать" на странице calculator иногда срабатывают не с первого раза (не знаю в чём проблема), достаточно просто нажать эти же кнопки ещё раз. После выбора нового банка, нужно ОБЯЗАТЕЛЬНО нажимать кнопку "синхронизировать".

                                                                    
                                                                    UPD 21.04.2022: 
Обновил файлы согласно последнему фидбеку, а именно:
- заменил все getElementById на querySelector;
- убрал все лишние айдишники у html-элементов;
- добавил расчёт минимального платежа на странице калькулятора;

Ещё добавил надписи на странице калькулятора, дабы сделать интерфейс более простым.

Хотел ответить на 4-й вопрос фидбека "Який сенс вводити відсоткову ставку при створені банку якщо в калькуляторі вона не береться до уваги, а потрібно руками вписувати".
Чтобы не вписывать значения руками (кроме размера кредита), я добавил специальную кнопку "синхронизировать", которая упрощает работу с калькулятором. Поэтому, пожалуйста, нажимайте эту кнопку КАЖДЫЙ раз, когда меняете банк или стравите новый в менюшку выбора. 
