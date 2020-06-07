CREATE TABLE IF NOT EXISTS appraisal_data(
  "appraisal_id" int8 PRIMARY KEY AUTOINCREMENT,
  "title" varchar(255),
  "first_name" varchar(255),
  "last_name" varchar(255),
  "middle_name" varchar(255),
  "gender" varchar(255),
  "marital_status" varchar(255),
  "date_of_birth" date,
  "number_of_dependants" int8,
  "address" varchar(255),
  "loan_amt_apply" float8,
  "loan_service_time" int8,
  "interest_rate" int8,
  "payback_amt" float8,
  "name_of_collateral" varchar(255),
  "duration_unit" varchar(53),
  "debts_due_in" float8,
  "debts_due_over" float8,
  "market_val_collateral" float8,
  "forcred_val_collateral" float8,
  "business_name" varchar(255),
  "business_sector" varchar(255),
  "total_family_expense" float8,
  "business_networth" float8,
  "total_business_expense" float8,
  "total_purchases" float8,
  "total_sales" float8,
  "total_inventory" float8,
  "other_buz_monthly_earnings" float8,
  "buz_cash" float8,
  "buz_cash_at_bank" float8,
  "receivables" float8,
  "value_of_equipment" float8,
  "value_of_buz_premises" float8,
  "value_of_vehicle" float8,
  "value_of_furniture" float8,
  "account_payable" float8,
  "customer_exists" bool,
  "spouse_exists" bool,
  "spouse_buz_inquiry" bool,
  "appraisal_code" varchar(255),
  "created_on" timestamp(6),
  "created_by" int8,
  "updated_on" timestamp(6),
  "updated_by" int8,
  "institution_id" int8,
  "branch_id" int8
)
;