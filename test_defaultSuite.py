# Generated by Selenium IDE
import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

class TestDefaultSuite():
  def setup_method(self, method):
    self.driver = webdriver.Chrome()
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_testvivianabusto(self):
    self.driver.get("https://www.vivianabustos.com.ar/index.php")
    self.driver.set_window_size(1382, 744)
    time.sleep(1)
    self.driver.find_element(By.CSS_SELECTOR, ".item-101 > a").click()
    self.driver.find_element(By.CSS_SELECTOR, ".item-116 > a").click()
    self.driver.find_element(By.LINK_TEXT, "Faciales y capilares").click()
    time.sleep(1)
    self.driver.find_element(By.LINK_TEXT, "Corporales").click()
    self.driver.find_element(By.LINK_TEXT, "Maquillaje").click()
    self.driver.find_element(By.CSS_SELECTOR, ".itemList:nth-child(2) .catItemHeader a").click()
    self.driver.find_element(By.CSS_SELECTOR, ".tag_maquillaje:nth-child(2)").click()
  
test = TestDefaultSuite()
test.setup_method(None)
test.test_testvivianabusto()
time.sleep(5)
test.teardown_method(None)