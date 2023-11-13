#include <Wire.h>
#include <DallasTemperature.h> //lib sensor temp
#define DSl8b20 2
#include <LiquidCrystal_I2C.h> // lib lcd
#include <ArduinoJson.h> // lib json

OneWire ourWire(DSl8b20); //pinagem temp
DallasTemperature sensors(&ourWire);

LiquidCrystal_I2C lcd(0x27, 16, 2); // Pinagem do LCD

float valor_calibracao = 21.34 + 5.31;   // Fator de calibração

int contagem = 0;           // Variável de contagem
float soma_tensao = 0;      // Variável para soma de tensão
float media = 0;            // Variável que calcula a media
float entrada_A0;           // Variável de leitura do pino A0
float tensao;               // Variável para conversão em tensão
unsigned long tempo;        // Float tempo

void setup()
{
  Serial.begin(9600);
  sensors.begin();
  lcd.init();         // initialize the lcd
  lcd.backlight(); 

  lcd.setCursor(1, 0);
  inicio();
  delay(3000);
  lcd.clear(); 
}

void loop() {
  sensors.requestTemperatures();
  soma_tensao = 0;   // Inicia soma_tensão em 0
  contagem = 0;      // Inicia a contagem em 0

  Serial.print(sensors.getTempCByIndex(0));
  Serial.println(" °C");

  while (contagem < 10) {                   // Executa enquanto contagem menor que 10
    tempo = millis();                       // Define o tempo em microssegundos
    entrada_A0 = analogRead(A0);            // Lê a entrada analógica
    tensao = (entrada_A0 * 5.0) / 1024.0;   // Converte em tensão, o valor lido
    soma_tensao = (soma_tensao + tensao);   // Soma a tensão anterior com a atual
    contagem++;                             // Soma 1 à variável de contagem
    delay(100);          
  }

  media = soma_tensao / 10;                 // Calcula a média das leituras
  float valor_temp = sensors.getTempCByIndex(0); // leitura da temperatura
  float valor_pH = -5.70 * media + valor_calibracao;    // Calcula valor de pH
  Serial.print(valor_pH);

  lcd.clear();    
  lcd.setCursor(0, 0);     
  lcd.print("pH:"); 
  lcd.setCursor(0, 1);   
  lcd.print("Temp:"); 
  
  if (valor_pH < 10)
    lcd.setCursor(4, 0);
    lcd.print(valor_pH);
    lcd.setCursor(6, 1);
    lcd.print(valor_temp);
    lcd.setCursor(10, 1);
    lcd.print(" C");

  data(valor_pH, valor_temp);
  delay(1000); 
}

void data (float ph, float temperature) {
  String name;
  DynamicJsonDocument doc(1024);
  doc["name"] = "Amostra 1";
  doc["ph"] = ph;
  doc["temperature"] = temperature;
  // Serializa o objeto JSON em uma string
  String json;
  serializeJson(doc, json);
  Serial.print(json); 
}

void inicio ()  //loading
{
  lcd.setCursor(0, 0);    
  lcd.print("L"); 
  delay (200);
  lcd.print("a"); 
  delay (200);
  lcd.print("b"); 
  delay (200);
  lcd.print("I"); 
  delay (200);
  lcd.print("o"); 
  delay (200);
  lcd.print("T"); 
  delay (200);
  lcd.print("e"); 
  delay (200);
  lcd.print("c"); 
  delay (200);
  lcd.print("k"); 
  delay (200);
  lcd.print("."); 
  delay (200);
  lcd.print("."); 
  delay (200);
  lcd.print("."); 
  delay (200);
  lcd.print("."); 
  delay (200);
  lcd.print("."); 
  delay (200);
}