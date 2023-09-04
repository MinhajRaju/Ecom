# Generated by Django 4.2.4 on 2023-09-03 03:38

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('po_app', '0015_remove_product_variation_categories_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='categories',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=1000), blank=True, null=True, size=None),
        ),
    ]
