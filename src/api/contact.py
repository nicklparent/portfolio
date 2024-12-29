from flask import Flask, request, jsonify
import html
import bleach
import os

def sanitize(data: str):
    return html.escape(bleach.clean(data))

def contact():
    try:
        data = request.get_json()
        email = sanitize(data['email'])
        subject = sanitize(data['subject'])
        message = sanitize(data['message'])



    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})