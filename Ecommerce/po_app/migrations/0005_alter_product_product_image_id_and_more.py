# Generated by Django 4.2.4 on 2023-08-12 05:22

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('po_app', '0004_product_totalqty'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='product_image_id',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.IntegerField(max_length=200), blank=True, null=True, size=None),
        ),
        migrations.AlterField(
            model_name='product_variation',
            name='product_image_id',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.IntegerField(max_length=200), blank=True, null=True, size=None),
        ),
    ]
